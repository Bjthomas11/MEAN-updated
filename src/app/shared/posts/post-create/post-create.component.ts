import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Post } from 'src/app/core/models/Post';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent implements OnInit {
  inputtedValue: any;
  inputTitle: string = '';
  editMode: boolean = false;
  postId: string;
  post: any;

  constructor(
    public postService: PostService,
    private router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onClick = (postForm: NgForm) => {
    if (postForm.invalid) return;
    this.post = {
      title: postForm.value.title,
      content: postForm.value.content,
    };
    this.postService.addPost(this.post).subscribe();
    postForm.resetForm();
    this.router.navigate(['/']);
  };
}
