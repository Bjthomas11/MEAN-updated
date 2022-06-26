import { Component, OnInit } from '@angular/core';
import { Post } from './core/models/Post';
import { PostsService } from './core/services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private postService: PostsService) {}

  ngOnInit() {}
}
