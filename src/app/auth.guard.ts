import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from './app.service';


import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Use the spread operator to keep the previously resolved data
    next.data = {...next.data, guardedData123: 'guarded123'};
    console.log(next.data);
    return true;

    //return this.restrictByEmail();
  }
  
  restrictByEmail()
  {
    console.log('CanActivate passed');
    return true;
  }
} 
