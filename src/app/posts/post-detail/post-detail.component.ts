import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router, NavigationEnd } from "@angular/router";
import { ActivatedRoute} from "@angular/router";
import { Post } from '../../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
 filteredposts: Post[];
  constructor(private _appService : AppService,private _activeroute: ActivatedRoute, _router: Router) { }

  ngOnInit() {
    // this._activeroute.params.subscribe( 
    //   params => {
    //     console.log(params);
    //     this._appService.getPostsWithId(params).subscribe(data=>this.posts = data);
    //   });
    this._activeroute.queryParams.subscribe( 
      params => {
        console.log(params);
        this._appService.getPostsWithId(params).subscribe(data=>
          {this.filteredposts = data;
          console.log(data.length)});
      });
     

  }

}
