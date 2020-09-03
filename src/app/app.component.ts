import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgWidth = 50;
  public imgSrc = 'https://i7.pngflow.com/pngimage/14/568/png-angularjs-logo-javascript-security-token-angle-triangle-logo-computer-programming-clipart.png';
  public content = this.domSanitizer.bypassSecurityTrustHtml('<span style="color:red">Angular</span>');

  public text = '';


  constructor(
    private readonly domSanitizer: DomSanitizer
  ) {
  }

  public clickOnImg(divEl: HTMLDivElement, _event: MouseEvent): void {
    console.log(divEl);
  }

  public search(value: string): void {
    this.text = value;
  }
}
