import { Component, Input } from '@angular/core';
import { IProduct } from '../products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  // providers: [
  //   ProductsService
  // ],
  // encapsulation: ViewEncapsulation.none
})
export class ProductCardComponent {

  @Input()
  public product!: IProduct;

  @Input()
  public isOdd!: boolean;

}
