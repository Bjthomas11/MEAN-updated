import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Post } from 'src/app/core/models/Post';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() posts: Post[] = [];
  postPerPage: number = 2;
  pageSizeOptions: number[] = [1, 2, 4, 6];
  datasource: null;
  pageIndex: number;

  constructor(private postService: PostsService) {}

  ngOnInit(): void {}

  onPageChange(event: PageEvent) {
    console.log(event);
  }
}
