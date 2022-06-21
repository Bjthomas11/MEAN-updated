import { Component, OnInit } from '@angular/core';
import { Post } from './core/models/Post';
import { PostService } from './core/services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getLSPosts();
  }
}
