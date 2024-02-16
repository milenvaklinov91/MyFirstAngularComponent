import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  slogan: string = 'Your one stop shop for everything.' // String Interpolation
  source: string='/assets/shopping.jpg';
  getSlogan(){
    return 'This is a new slogan for this web application.'
  }
}
