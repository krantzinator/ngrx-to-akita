import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, skip, filter, debounceTime, switchMap } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';

// import { FindBookPageActions } from '../../books/actions';
// import { Book } from '../../books/models/book';
// import * as fromBooks from '../../books/reducers';
import { Book } from '../state/book.model';
import { BooksService } from '../state/books.service';
import { BooksQuery } from '../state/books.query';

@Component({
  selector: 'app-find-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-book-search
      [query]="searchQuery$ | async"
      [searching]="loading$ | async"
      [error]="error$ | async"
      (search)="search($event)">
    </app-book-search>
    <app-book-preview-list
      [books]="books$ | async">
    </app-book-preview-list>
  `,
})
export class FindBookPageComponent {
  searchQuery: string;
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(
    // private store: Store<fromBooks.State>
    private bookQuery: BooksQuery,
    private booksService: BooksService,
    ) {
      this.searchQuery = this.bookQuery.getSearchTerm;
      this.loading$ = this.bookQuery.selectLoading();

      this.bookQuery.selectSearchTerm$.pipe(
        skip(1),
        filter(Boolean),
        debounceTime(300),
        untilDestroyed(this))
      .subscribe(searchTerm => {
        this.booksService.searchBooks(searchTerm);
      });

      this.books$ = this.bookQuery.selectResultIds$.pipe(
        switchMap(ids => this.bookQuery.selectMany(ids))
      );
    // this.searchQuery$ = store.pipe(select(fromBooks.getSearchQuery));
    // this.books$ = store.pipe(select(fromBooks.getSearchResults));
    // this.loading$ = store.pipe(select(fromBooks.getSearchLoading));
    // this.error$ = store.pipe(select(fromBooks.getSearchError));
  }

  search(query: string) {
    this.booksService.updateSearchTerm(query);
    // this.store.dispatch(new FindBookPageActions.SearchBooks(query));
  }
}
