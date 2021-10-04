import { HttpClient, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlWS = 'http://localhost:3000/users';

  private limit = 25;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlWS);
  }

  getUsersByLazyLoading(page: string): Observable<User[]> {
    const params = new HttpParams()
    .set('_page', page)
    .set('_limit', this.limit.toString());
    return this.http.get<User[]>(this.urlWS, {params});
  }

  
  attachPictureToUser(users: User[]) {
    users.map(user => {
      let r = Math.floor(Math.random() * 6) + 1;
      user.picture = "../../assets/heads/head_" + r + ".png"
    });
  }
}
