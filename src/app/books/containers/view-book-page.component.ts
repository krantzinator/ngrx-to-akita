import { Component, OnDestroy, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { BooksService } from '../state/books.service';

// import * as fromBooks from '../../books/reducers';
// import { ViewBookPageActions } from '../../books/actions';

/**
 * Note: Container components are also reusable. Whether or not
 * a component is a presentation component or a container
 * component is an implementation detail.
 *
 * The View Book Page's responsibility is to map router params
 * to a 'Select' book action. Actually showing the selected
 * book remains a responsibility of the
 * SelectedBookPageComponent
 */
@Component({
  selector: 'app-view-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-selected-book-page></app-selected-book-page>
  `,
})
export class ViewBookPageComponent implements OnInit, OnDestroy {
  actionsSubscription: Subscription;

  constructor(
    // store: Store<fromBooks.State>,
    private bookService: BooksService,
    private route: ActivatedRoute
    ) {
    // this.actionsSubscription = route.params
    //   .pipe(map(params => new ViewBookPageActions.SelectBook(params.id)))
    //   .subscribe(store);
  }

  ngOnInit() {
    const activeBookId = this.route.snapshot.paramMap.get('id');
    this.bookService.setActive(activeBookId);
  }

  ngOnDestroy() {
    // this.actionsSubscription.unsubscribe();
  }
}
