import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { Post } from 'src/app/core/models/Post';
import { PostsService } from 'src/app/core/services/posts.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  totalPosts = 10;
  postPerPage: number = 2;
  pageSizeOptions: number[] = [1, 2, 5, 10];
  currentPage: number = 1;
  isLoggedIn = new BehaviorSubject(false);

  constructor(
    public postService: PostsService,
    private userService: UserService
  ) {
    // this.isLoggedIn = this.userService.isLoggedIn;
  }

  ngOnInit(): void {
    this.postService
      .getPosts(this.postPerPage, this.currentPage)
      .subscribe((post: any) => {
        this.posts = post;
      });
  }

  onDelete(post: any) {
    this.postService.deletePost(post).subscribe(() => {
      this.postService.getPosts(this.postPerPage, this.currentPage);
    });
    this.posts = this.posts.filter((p) => p.id !== post.id);
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.postPerPage = event.pageSize;
    this.postService.getPosts(this.postPerPage, this.currentPage);
  }
}
