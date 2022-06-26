import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/core/models/Post';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(public postService: PostsService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((post: any) => {
      this.posts = post;
    });
  }

  onDelete(post: any) {
    this.postService.deletePost(post).subscribe();
    this.posts = this.posts.filter((p) => p.id !== post.id);
  }
}
