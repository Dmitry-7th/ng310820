import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IProduct, products$ } from './data';
import { UnSubscriber } from './utils/unsubscriber';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends UnSubscriber implements OnInit, OnDestroy {

  public myTitle = 'Ng Course';
  public myDrawer!: MatDrawer;
  public searchText = '';
  public products$: Observable<IProduct[]> = products$;

  public ngOnInit(): void {
    // products$
    //   .pipe(takeUntil(this.unSubscriber$))
    //   .subscribe((p) => {
    //     this.products = p;
    //   });
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
}
