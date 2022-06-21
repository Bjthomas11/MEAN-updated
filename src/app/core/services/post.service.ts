import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor() {}

  getPosts() {
    return [...this.posts];
  }

  getPostUpdatedListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {
      title: title,
      content: content,
    };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }

  deletePost(post: Post) {
    this.posts = this.posts.filter((p) => p.title !== post.title);
    this.postsUpdated.next([...this.posts]);
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }

  getLSPosts() {
    const posts = localStorage.getItem('posts');
    if (posts) {
      this.posts = JSON.parse(posts);
    }
  }
}
