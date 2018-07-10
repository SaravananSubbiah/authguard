import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostCommentComponent } from './posts/post-comment/post-comment.component';
import { AuthGuard } from './auth.guard';
import { CommentResolver } from './auth.resolver';

const routes: Routes = [
  { path: 'post-list', component: PostListComponent },
  //{path: 'post-detail/:userId', component : PostDetailComponent }
  {
    path: 'post-detail',
    component: PostDetailComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'post-comment/:postId',
    component: PostCommentComponent,
    resolve: { comments: CommentResolver },
    canActivate: [CommentResolver],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    CommentResolver
  ],
})
export class AppRoutingModule { }
