import { Injectable } from '@angular/core';
import { BooksStore } from './books.store';
import { BooksQuery } from './books.query';
import { GoogleBooksService } from '../../core/services/google-books.service';
import { Book } from '../models/book';
import { ID } from '@datorama/akita';
import { forkJoin } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BooksService {

  constructor(
    private booksStore: BooksStore,
    private bookQuery: BooksQuery,
    private googleService: GoogleBooksService,
    ) {
  }

  searchBooks(searchTerm: string) {
    this.booksStore.setLoading(true);
    this.googleService.searchBooks(searchTerm).subscribe(books => {
      const nonCollection = this.bookQuery.nonCollectionBooks;
      this.booksStore.remove([...nonCollection]);
      this.add(books);
      this.booksStore.updateResultIds(books.map(({ id }) => id));
      this.booksStore.setLoading(false);
    });
  }

  updateSearchTerm(searchTerm: string) {
    this.booksStore.updateSearchTerm(searchTerm);
  }

  setActive(id: ID) {
    this.booksStore.setActive(id);
  }

  get() {
    // this.http.get(url).subscribe((entities) => {
      // this.{booksStore.set(entities);
    // });
  }

  add(books: Book[]) {
    this.booksStore.add(books);
  }

  loadBooksToStore() {
    const books$ = this.bookQuery.collection.map(id => this.googleService.retrieveBook(id.toString()));
    forkJoin(books$).subscribe(books => this.add(books));
  }

  updateCollection(bookId: ID) {
    this.booksStore.updateCollection(bookId);
  }

}
