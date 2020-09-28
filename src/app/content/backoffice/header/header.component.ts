import {
  Component,
  Input,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  public set title(t: string) {
    this.ownTitle = t;
  };

  public someClass = 'someClass value';
  public condition = true;

  public ownTitle!: string;

  @Input()
  public drawer!: MatDrawer;

  constructor() {
    console.log('construct', this.title);
  }

  // ngOnInit(): void {
  //   console.log('ngOnInit');
  // }
  //
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges', changes);
  // }
  //
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit');
  // }
  //
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit');
  // }
  //
  // ngDoCheck(): void {
  //   console.log('ngDoCheck');
  // }
  //
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked');
  // }
  //
  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked');
  // }

}
