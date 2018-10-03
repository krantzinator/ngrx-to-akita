import { Injectable } from '@angular/core';
import { QueryEntity, toBoolean } from '@datorama/akita';
import { AuthStore, AuthState } from './auth.store';
import { Auth } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthQuery extends QueryEntity<AuthState, Auth> {

  isLoggedIn$ = this.select(state => toBoolean(state.user));

  constructor(protected store: AuthStore) {
    super(store);
  }

}
