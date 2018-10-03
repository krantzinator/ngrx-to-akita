import { Injectable } from '@angular/core';
import { AuthStore } from './auth.store';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

export interface Creds {
  password: string,
  username: string
};

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private authStore: AuthStore,
              private router: Router) {
  }

  login(creds: Creds) {
    return this.callServer(creds).pipe(
      map(user => {
        this.authStore.login(user);
        this.router.navigate(['/']);
      }),
      catchError(error => of(error))
    );
  }

  logout() {
    this.authStore.logout();
    this.router.navigate(['/login']);
  }

  private callServer({ username, password }: Creds): Observable<User> {
    const user = new BehaviorSubject<User>({name: 'string'});
    return user.asObservable();
  }

  get() {
    // this.http.get(url).subscribe((entities) => {
      // this.{authStore.set(entities);
    // });
  }

  add() {
    // this.http.post().subscribe((entity) => {
      // this.{authStore.add(entity);
    // });
  }

}
