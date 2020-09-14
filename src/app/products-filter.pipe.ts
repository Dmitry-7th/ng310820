import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './data';

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

  public transform(products: IProduct[], searchTerm: string): IProduct[] {
    console.log('productsFilter');
    if (!searchTerm) {
      return products;
    }
    return products.filter((product: IProduct) =>
      `${product.title} ${product.price}`.toLocaleLowerCase().includes(searchTerm.toLowerCase()));
  }

}
