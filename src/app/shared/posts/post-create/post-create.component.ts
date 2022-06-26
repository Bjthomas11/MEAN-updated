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
  editMode: boolean = false;
  postId: string;
  post: any;

  constructor(
    public postService: PostService,
    private router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params);
      if (params.has('id')) {
        this.editMode = true;
        this.postId = params.get('id');
        this.post = this.postService.getPost(this.postId);
      } else {
        this.editMode = false;
        this.postId = null;
      }
    });
  }

  onSave = (postForm: NgForm) => {
    if (postForm.invalid) return;
    this.post = {
      title: postForm.value.title,
      content: postForm.value.content,
    };
    if (!this.editMode) {
      this.postService.addPost(this.post).subscribe();
    } else {
      console.log(this.post);
      this.postService
        .updatePost(this.postId, this.post)
        .subscribe((res: any) => {
          console.log(res);
        });
    }
    postForm.resetForm();
    this.router.navigate(['/']);
  };
}
