import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { environment as env } from 'src/environments/environment';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLoggedIn = new BehaviorSubject(false);
  user = new BehaviorSubject(null);
  constructor(private http: HttpClient, private router: Router) {}

  createUser(user: User) {
    let url = env.LOCAL_SERVER_API;
    return this.http.post(`${url}/user`, user, httpOptions);
  }

  getUser(user: User) {
    let url = env.LOCAL_SERVER_API;
    this.http.get(`${url}/user/`).subscribe((res: any) => {
      res.find((u: User) => {
        if (u.email === user.email && u.password === user.password) {
          this.isLoggedIn.next(true);
          this.user.next(user);
          localStorage.setItem('user', JSON.stringify(u));
          localStorage.setItem(
            'loggedIn',
            JSON.stringify(this.isLoggedIn.getValue())
          );
          console.log(u);
          this.router.navigate(['/']);
        }
      });
    });
  }

  signOutUser() {
    this.isLoggedIn.next(false);
    this.user.next(null);
    localStorage.removeItem('user');
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/login']);
  }
}
