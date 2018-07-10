import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Post } from '../../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.getPosts().subscribe(data=>this.posts = data);
  }

}
