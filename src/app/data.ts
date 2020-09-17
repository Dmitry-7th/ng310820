import { Observable, of } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

export interface IProduct {
  '_id': string;
  'title': string;
  'img': string;
  'price': number;
  'author': string;
  'isFavorite': boolean;
}

export const products: IProduct[] = [
  {
    '_id': '5f5f95538de606466317fde9',
    'title': 'Product 2345',
    'img': 'assets/img/product-2.jpg',
    'price': 221,
    'author': 'Vlad',
    'isFavorite': false
  },
  {
    _id: '5f5f95538de606466317fdea',
    'title': 'Product 1',
    'img': 'assets/img/product-1.jpg',
    'price': 200,
    'author': 'Igor',
    'isFavorite': true
  },
  {
    '_id': '5f5f95538de606466317fdeb',
    'title': 'Product 111',
    'img': 'assets/img/product-4.jpg',
    'price': 2345,
    'author': 'Igor',
    'isFavorite': false
  },
  {
    '_id': '5f5f95538de606466317fdec',
    'title': 'Product 41',
    'img': 'assets/img/product-6.jpg',
    'price': 2344,
    'author': 'Lena',
    'isFavorite': false
  },
  {
    '_id': '5f5f95538de606466317fded',
    'title': 'Product 231',
    'img': 'assets/img/product-5.jpg',
    'price': 23,
    'author': 'Vlad',
    'isFavorite': true
  },
  {
    '_id': '5f5f95538de606466317fdee',
    'title': 'Product 31',
    'img': 'assets/img/product-7.jpg',
    'price': 334,
    'author': 'Lena',
    'isFavorite': false
  },
  {
    '_id': '5f5f95538de606466317fdef',
    'title': 'Product 11',
    'img': 'assets/img/product-8.jpg',
    'price': 22,
    'author': 'Igor',
    'isFavorite': false
  },
  {
    '_id': '5f5f95538de606466317fdf0',
    'title': 'Product 122',
    'img': 'assets/img/product-9.jpg',
    'price': 1200,
    'author': 'Max',
    'isFavorite': true
  },
  {
    '_id': '5f5f95538de606466317fdf1',
    'title': 'Product 234',
    'img': 'assets/img/product-3.jpg',
    'price': 333,
    'author': 'Igor',
    'isFavorite': true
  }
];

export interface IProductsRes {
  products: IProduct[];
  serviceError: boolean | null;
}

export const products$: Observable<IProductsRes> = of(
  {products, serviceError: null}
).pipe(delay(3000), catchError(() => {
  return [];
}));
