import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(signupForm: NgForm) {
    if (signupForm.invalid) return;
    this.userService.createUser(signupForm.value);
    // console.log(signupForm.value);
    // loginForm.reset();
  }
}
