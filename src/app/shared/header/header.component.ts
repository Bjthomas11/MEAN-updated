import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'MEAN Course';
  @Input() user: User;
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  logout() {
    this.userService.signOutUser();
  }
}
