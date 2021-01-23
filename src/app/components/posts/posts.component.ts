import {Component, Input, OnInit} from '@angular/core';
import {IPostModel} from '../models/post.model';
import {PostService} from '../services/post.service';
import {log} from 'util';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPostModel[];

  chosePost: IPostModel;

  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(value => this.posts = value);
  }

  getUpPost(post: IPostModel): void {
    this.chosePost = post;
  }

}
