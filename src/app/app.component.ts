import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IProduct, products$ } from './data';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { MatCheckboxChange } from '@angular/material/checkbox';

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
  public products$: Observable<IProduct[]> = products$
    .pipe(
      pluck('products')
      // map((res) => res.products)
    );

  public ngOnInit(): void {
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
