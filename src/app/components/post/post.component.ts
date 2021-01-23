import {Component, Input, OnInit, Output} from '@angular/core';
import {IPostModel} from '../models/post.model';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  @Input()
  post: IPostModel;
  @Output()
  upPost = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  getPost(post): void {
    this.upPost.emit(post);
  }

}
