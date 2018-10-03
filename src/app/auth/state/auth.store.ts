import { Injectable } from '@angular/core';
import { EntityState, Store, StoreConfig } from '@datorama/akita';
import { Auth } from './auth.model';
import { User } from '../models/user';

export interface AuthState extends EntityState<Auth> {
  user: User | null;
}

export const initialState: AuthState = {
  user: null
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {

  constructor() {
    super(initialState);
  }

  login(user: User) {
    /** In real life, you will abstract this to service. */
    localStorage.setItem('user', JSON.stringify(user));
    // should be able to use this.update(), but I can't; left
    // a comment on the Medium post asking about this
    this.update({ user });
  }

  logout() {
    /** In real life, you will abstract this to service. */
    localStorage.removeItem('user');
    this.update(initialState);
  }

}

