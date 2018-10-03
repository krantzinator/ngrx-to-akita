import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as AuthActions from '../../auth/actions/auth.actions';
import * as fromAuth from '../../auth/reducers';
import * as fromRoot from '../../reducers';
import { LayoutActions } from '../../core/actions';
import { LayoutQuery } from '../state/layout.query';
import { LayoutService } from '../state/layout.service';

@Component({
  selector: 'app-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-layout>
      <app-sidenav [open]="showSidenav$ | async" (closeMenu)="closeSidenav()">
        <app-nav-item (navigate)="closeSidenav()" *ngIf="loggedIn$ | async" routerLink="/" icon="book" hint="View your book collection">
          My Collection
        </app-nav-item>
        <app-nav-item (navigate)="closeSidenav()" *ngIf="loggedIn$ | async" routerLink="/books/find" icon="search" hint="Find your next book!">
          Browse Books
        </app-nav-item>
        <app-nav-item (navigate)="closeSidenav()" *ngIf="!(loggedIn$ | async)">
          Sign In
        </app-nav-item>
        <app-nav-item (navigate)="logout()" *ngIf="loggedIn$ | async">
          Sign Out
        </app-nav-item>
      </app-sidenav>
      <app-toolbar (openMenu)="openSidenav()">
        Book Collection
      </app-toolbar>

      <router-outlet></router-outlet>
    </app-layout>
  `,
})
export class AppComponent implements OnInit {
  showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  constructor(
    private layoutQuery: LayoutQuery,
    private layoutService: LayoutService,
    ) { }

    ngOnInit() {
      this.showSidenav$ = this.layoutQuery.sideNavOpen$;
    }

  closeSidenav() {
    this.layoutService.setSideNavState(false);
  }

  openSidenav() {
    this.layoutService.setSideNavState(true);
  }

  // logout() {
  //   this.closeSidenav();

  //   this.store.dispatch(new AuthActions.LogoutConfirmation());
  // }
}
