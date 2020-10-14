import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {
  constructor(public postService:PostService, private router: Router) { }

  deletePost(index: number){
    this.postService.deletePost(index)
    .subscribe(res => res)
    this.ngOnInit()
  }
  addButton(){
    this.router.navigate(['add']);
  }

  setPostId(index:number){
    this.postService.setPostId(index);
  }

  ngOnInit(): void {
    this.postService.fetchAllPost()
    .subscribe((res:any)=>
      {
        this.postService.post = res;
      })
  }

}
