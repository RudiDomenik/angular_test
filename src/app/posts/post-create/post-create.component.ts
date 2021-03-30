import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredContent = '';
  enteredTitle = '';
  newPost = '';

  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
  }
   onAddPost(form: NgForm){
     if(form.invalid){
      return;
     }
    this.postsService.addPost(form.value.id, form.value.title, form.value.content);
     form.resetForm();
  }

}
