import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Post } from '../models/Post';
import { environment as env } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private posts: Post[] = [];

  constructor(private http: HttpClient) {}

  getPosts(postsPerPage: number, currentPage: number) {
    let url = env.POSTS_API;
    const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
    return this.http.get<Post[]>(`${url}/posts` + queryParams);
  }

  getPost(id: any) {
    let url = env.POSTS_API;
    return this.http.get<any>(`${url}/posts/${id}`);
  }

  addPost(post: Post) {
    let url = env.POSTS_API;
    this.posts.push(post);
    localStorage.setItem('posts', JSON.stringify(this.posts));
    return this.http.post<Post[]>(`${url}/posts`, post, httpOptions);
  }

  updatePost(id: any, post: Post) {
    let url = env.POSTS_API;
    this.posts.push(post);
    return this.http.put<Post[]>(`${url}/posts/${id}`, post, httpOptions);
  }

  deletePost(post: Post) {
    let url = env.POSTS_API;
    return this.http.delete<Post[]>(`${url}/posts/${post.id}`);
  }
}
