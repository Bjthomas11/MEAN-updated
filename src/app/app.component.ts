import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from './core/models/Post';
import { User } from './core/models/User';
import { PostsService } from './core/services/posts.service';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoggedIn = new BehaviorSubject(false);
  user: User;
  constructor(
    private postService: PostsService,
    private userService: UserService
  ) {
    // this.isLoggedIn = this.userService.isLoggedIn;
    // this.user = this.userService.user.getValue();
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.isLoggedIn.next(JSON.parse(localStorage.getItem('loggedIn')));
  }
}
