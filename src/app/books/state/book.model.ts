import { ID } from '@datorama/akita';

export interface Book {
  id: ID;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishDate: string;
    description: string;
    averageRating: number;
    ratingsCount: number;
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
    };
  };
}

/**
 * A factory function that creates Books
 */
export function createBook(params: Partial<Book>) {
  return {
    id: '1',
    volumeInfo: {
      title: 'title',
      subtitle: 'subtitle',
      authors: ['author'],
      publisher: 'publisher',
      publishDate: '',
      description: 'description',
      averageRating: 3,
      ratingsCount: 5,
      imageLinks: {
        thumbnail: 'string',
        smallThumbnail: 'string',
      },
    },
  } as Book;
}
