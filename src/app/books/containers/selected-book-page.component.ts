import { Component, ChangeDetectionStrategy } from '@angular/core';
// import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

// import * as fromBooks from '../../books/reducers';
// import { SelectedBookPageActions } from '../../books/actions';
// import { Book } from '../../books/models/book';
import { Book } from '../state/book.model';
import { BooksService } from '../state/books.service';
import { BooksQuery } from '../state/books.query';

@Component({
  selector: 'app-selected-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-book-detail
      [book]="book$ | async"
      [inCollection]="isSelectedBookInCollection$ | async"
      (add)="addToCollection($event)"
      (remove)="removeFromCollection($event)">
    </app-book-detail>
  `,
})
export class SelectedBookPageComponent {
  book$: Observable<Book>;
  isSelectedBookInCollection$: Observable<boolean>;

  constructor(
    // private store: Store<fromBooks.State>
    private booksService: BooksService,
    private bookQuery: BooksQuery,
    ) {
    // this.book$ = store.pipe(select(fromBooks.getSelectedBook));
    // this.isSelectedBookInCollection$ = store.pipe(select(fromBooks.isSelectedBookInCollection));
    this.book$ = this.bookQuery.selectActive();
    this.isSelectedBookInCollection$ = this.bookQuery.isInCollection$;
  }

  updateCollection({ id }: Book) {
    this.booksService.updateCollection(id);
  }

  // addToCollection(book: Book) {
  //   this.store.dispatch(new SelectedBookPageActions.AddBook(book));
  // }

  // removeFromCollection(book: Book) {
  //   this.store.dispatch(new SelectedBookPageActions.RemoveBook(book));
  // }
}
