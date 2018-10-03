import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
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
export class AuthStore extends EntityStore<AuthState, Auth> {

  constructor() {
    super(initialState);
  }

  login(user: User) {
    /** In real life, you will abstract this to service. */
    localStorage.setItem('user', JSON.stringify(user));
    this.updateRoot({ user });
  }

  logout() {
    /** In real life, you will abstract this to service. */
    localStorage.removeItem('user');
    this.updateRoot(initialState);
  }

}

