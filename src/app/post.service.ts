import { Injectable } from '@angular/core';
import { posts } from './view-posts/posts';
import {comment} from './view-comment/comment'
import { HttpClient } from '@angular/common/http';

const baseUrl: string = ' http://localhost:3000/posts/'
const commentUrl:string = 'http://localhost:3000/comments/'
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public httpClient: HttpClient) { }
  public post: Array<posts> = [ ]
  public comments: Array<comment> = [ ]
  id:number
  addPost(post: posts){
    return this.httpClient.post(baseUrl,post )
  }
  addCommentPostId(comments:comment){
     let endPoints = this.getPostId()+'/comments/'
     return this.httpClient.post(baseUrl+endPoints,comments);
  }

  setPostId(index:number){
    this.id = index;
  }
  getPostId(){
    return this.id
  }

  deletePost(index: number){
    return this.httpClient.delete(baseUrl + index)
  }
  deleteComment(index: number){
    return this.httpClient.delete(commentUrl + index)
  }
  
  fetchAllPost(){
    return this.httpClient.get(baseUrl);
  }
  fetchPostId(){
    return this.httpClient.get(baseUrl+this.getPostId());
  }

  fetchCommentPostId(index:number){
    let endPoints = index+'/comments/'
    return this.httpClient.get(baseUrl + endPoints);
  }

}
