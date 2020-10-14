import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { ViewCommentComponent } from './view-comment/view-comment.component';

const routes: Routes = [
  {path:'', component: ViewPostsComponent},
  {path:'add', component: AddPostsComponent},
  {path:'comments', component: ViewCommentComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ViewPostsComponent,
    AddPostsComponent,
    ViewCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
