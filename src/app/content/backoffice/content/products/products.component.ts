import { Component, OnInit, Optional } from '@angular/core';
import { IProduct, ProductsService } from './products.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public searchText = '';
  public onlyFavorites = false;
  public products$!: Observable<IProduct[]>; //this.productsService.getProducts();

  public constructor(
    // @Inject(ProductsService) private productsService: any
    @Optional() private productsService: ProductsService
  ) {
  }

  public ngOnInit(): void {
    // console.log(this.productsService);
    this.products$ = this.productsService.getProducts();
    // this.productsService.getProducts().subscribe((v) => {
    //   console.log(v);
    // });
  }

  public search(text: string): void {
    this.searchText = text;
  }

  public productsFilter(products: IProduct[]): IProduct[] {
    console.log('productsFilter');
    return products.filter((product: IProduct) =>
      `${product.title} ${product.price}`.toLocaleLowerCase().includes(this.searchText.toLowerCase()));
  }

  public toggleOnlyFavorites(event: MatCheckboxChange): void {
    this.onlyFavorites = event.checked;
  }
}
