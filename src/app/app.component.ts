import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public myTitle = 'Ng Course';
  public myDrawer!: MatDrawer;

  // constructor(
  //   private cdr: ChangeDetectorRef
  // ) {
  // }

  public setSideNav(drawer: MatDrawer): void {
    // setTimeout(() => {
    //   this.drawer = drawer;
    // });

    // Promise.resolve().then(() => {
    //   this.drawer = drawer;
    // });
    this.myDrawer = drawer;
    // this.cdr.detectChanges()
  }

  public onClick(): void {

  }
}
