import { Component, OnInit, Optional } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { IProduct, ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public myTitle = 'Ng Course';
  public myDrawer!: MatDrawer;
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


  public setSideNav(drawer: MatDrawer): void {
    this.myDrawer = drawer;
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
