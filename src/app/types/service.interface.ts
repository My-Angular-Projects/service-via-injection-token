import { Observable } from 'rxjs';
import { IUser } from './user.interface';
import { IPost } from './post.interface';

export interface IBridgeService {
  /**
   * Get users
   * */
  getUsers(): Observable<IUser[]>;

  /**
   * Get posts
   * @returns All posts
   * */
  getPosts(): Observable<IPost[]>;
}
