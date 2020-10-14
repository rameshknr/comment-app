import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { posts } from '../view-posts/posts';

@Component({
  selector: 'app-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.css']
})
export class ViewCommentComponent implements OnInit {
  
  constructor(public postService:PostService, private router: Router) { }
  name:string
  returnHome(){
    this.router.navigate(['']);
  }

  addCommentPostId(body:string,postId: number){
    this.postService.addCommentPostId({body,postId})
    .subscribe()

    this.ngOnInit()
  }

  deleteComment(index: number){
    this.postService.deleteComment(index).subscribe()
    this.ngOnInit()
  }

  ngOnInit(): void {
    this.postService.fetchCommentPostId(this.postService.getPostId())
    .subscribe((res:any)=>
      { 
        this.postService.comments = res;
      })
      this.postService.fetchPostId()
    .subscribe ((re:any) => this.name = re.title )
  }

}
