import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { IBridgeService, IPost, IUser } from '../types';
import { BASE_URL } from '../app.config';

@Injectable()
export class BridgeService implements IBridgeService {
  constructor(private readonly http: HttpClient) {}

  /**
   * Get users
   * GET https://jsonplaceholder.typicode.com/users
   * @returns All users
   */
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${BASE_URL}/users`);
  }

  /**
   * Get posts
   * GET https://jsonplaceholder.typicode.com/posts
   * @returns All posts
   */
  getPosts(): Observable<IPost[]> {
    return this.http
      .get<IPost[]>(`${BASE_URL}/posts`)
      .pipe(map((posts: IPost[]) => posts.slice(0, 12)));
  }
}
