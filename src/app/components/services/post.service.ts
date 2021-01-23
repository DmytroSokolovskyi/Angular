import {Injectable} from '@angular/core';
import {IPostModel} from '../models/post.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getAllPosts(): Observable<IPostModel[]> {
    return this
      .httpClient
      .get<IPostModel[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
