import { Injectable } from '@angular/core';
import { CanActivate, Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

import { Comment } from './comment';

@Injectable()
export class CommentResolver implements Resolve<Comment[]>, CanActivate {
  comments: Observable<Comment[]>;
  constructor(private _appService: AppService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) {
    let postId = route.params['postId'];    
    return this._appService.getCommentsByPostId(postId);
    // .subscribe(user => {
    //   if (user) {
    //     return user;
    //   } else {
    //     // navigate the user back to the about page
    //     this.router.navigate(['/about']);
    //     return false;
    //   }
    // });
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Use the spread operator to keep the previously resolved data
    next.data = { ...next.data, guardedData123: 'guarded123' };
    let postId = next.params['postId'];  
    console.log('resolver check' + postId);
    let cmts: Comment[];
    this._appService.getCommentsByPostId(postId);
    console.log(cmts);
    // if (cmts.find(x => x.postId == '1')) {
    //   return false;
    // }
    // else {
    //   return true;
    // }
    return true;

    //return this.restrictByEmail();
  }

}