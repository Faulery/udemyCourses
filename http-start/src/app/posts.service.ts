import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType,
} from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };
    this.http
      .post<{ name: string }>(
        'https://recipe-book-9fe0c.firebaseio.com/posts.json',
        postData,
        { observe: 'response' }
      )
      .subscribe(
        responseData => {
          console.log(responseData.body);
        },
        error => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('customParam', 'customValue');
    return this.http
      .get<{ [key: string]: Post }>(
        'https://recipe-book-9fe0c.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ customHeader: 'Hello guys!' }),
          params: searchParams,
        }
      )
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete<{ [key: string]: Post }>(
        'https://recipe-book-9fe0c.firebaseio.com/posts.json',
        { observe: 'events', responseType: 'json' }
      )
      .pipe(
        tap(event => {
          console.log(event);
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          } else {
            console.log(event.type);
          }
        })
      );
  }
}
