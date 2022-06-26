import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/auth/login/login.component';
import { SignupComponent } from './shared/auth/signup/signup.component';
import { PostCreateComponent } from './shared/posts/post-create/post-create.component';
import { PostListComponent } from './shared/posts/post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
  },
  {
    path: 'create',
    component: PostCreateComponent,
  },
  {
    path: 'edit/:id',
    component: PostCreateComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
