import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {

  constructor(public postService:PostService, private router: Router) { }
  addPost(title: string,author: string){
    this.postService.addPost({title,author})
    .subscribe(res=>res)
    this.ngOnInit()
    this.router.navigate(['']);
  }
  returnHome(){
    this.router.navigate(['']);
  }
  ngOnInit(): void {
    this.postService.fetchAllPost()
    .subscribe((res:any)=>
      {
        this.postService.post = res;
      })
  }

}
