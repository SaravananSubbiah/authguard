import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from './post';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _httpClient: HttpClient) { }

  getApp(): string { 
    return "Hello world"; 
  } 

getPosts(): Observable<Post[]>{
  return this._httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
                          .pipe(map(response => response));
}


getPostsWithId(params: any): Observable<Post[]>{
  var userId = params['userId'];
  var id = params['id'];
  console.log(userId);
  return this._httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
                          .pipe(map(response => response));
}

getCommentsByPostId(postId: string): Observable<Comment[]>{
  console.log(postId);
  return this._httpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
  .pipe(map(response => response));

}
}
