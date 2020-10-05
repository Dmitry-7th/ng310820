import productsReducer from './reducers/products.reducers';
import { IProduct } from '../content/backoffice/content/products/products.service';

export interface IState {
  products: {
    items: IProduct[],
    loading: boolean
  }
}

export const reducers = {
  products: productsReducer
};
