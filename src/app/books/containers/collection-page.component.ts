import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
// import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CollectionPageActions } from '../../books/actions';
import { Book } from '../state/book.model';
// import { Book } from '../../books/models/book';
// import * as fromBooks from '../../books/reducers';
import { BooksQuery } from '../state/books.query';

@Component({
  selector: 'app-collection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card>
      <mat-card-title>My Collection</mat-card-title>
    </mat-card>

    <app-book-preview-list [books]="books$ | async"></app-book-preview-list>
  `,
  /**
   * Container components are permitted to have just enough styles
   * to bring the view together. If the number of styles grow,
   * consider breaking them out into presentational
   * components.
   */
  styles: [
    `
      mat-card-title {
        display: flex;
        justify-content: center;
      }
    `,
  ],
})
export class CollectionPageComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(
    // private store: Store<fromBooks.State>
    private bookQuery: BooksQuery
    ) {
    // this.books$ = store.pipe(select(fromBooks.getBookCollection));
    this.books$ = this.bookQuery.selectMany(this.bookQuery.collection);
  }

  ngOnInit() {
    // this.store.dispatch(new CollectionPageActions.LoadCollection());
  }
}
