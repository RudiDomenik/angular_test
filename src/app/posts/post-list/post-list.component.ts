import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';

import { Post } from '../post.model';
import {PostsService} from '../posts.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  // posts = [
  //   {title: 'First Post', content: 'This is the first post.'},
  //   {title: 'Second Post', content: 'This is the second post.'},
  //   {title: 'Third Post', content: 'This is the third post.'},

  // ];

  posts: Post[] = [];
  isLoading = false;
  private postSub: Subscription | any;
  // postsService: any;

  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.postsService.getPosts();
    this.postSub = this.postsService.getPostUpdateListener()
    .subscribe((posts: Post[]) => {
      this.isLoading = false;
      this.posts = posts;
    });
  }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

}
