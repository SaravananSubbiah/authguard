import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router, NavigationEnd } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Comment } from '../../comment';


@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  filteredComments: any;
  constructor(private _appService: AppService, private _activeroute: ActivatedRoute, _router: Router) {
    //console.log('component called');
    _activeroute.data
      .subscribe(data => {
        //console.log(data);
        this.filteredComments = data['comments'];
        //console.log(this.filteredComments);
      });

  }

  ngOnInit() {
    // this._activeroute.params.subscribe( 
    //   params => {
    //     console.log(params);
    //     this._appService.getPostsWithId(params).subscribe(data=>this.posts = data);
    //   });
    // this._activeroute.params.subscribe( 
    //   params => {
    //     console.log(params);
    //     this._appService.getCommentsByPostId(params['postId']).subscribe(data=>
    //       {this.filteredComments = data;
    //       console.log(data.length)});
    //   });

    //this.filteredComments = this._activeroute.snapshot.data;
   // console.log(this.filteredComments);

  }
}
