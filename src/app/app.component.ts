import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  pageTitle= 'Apenteng Joseph'
  burger = document.querySelector("#burger-menu");
  ul = document.querySelector("nav ul");
  nav = document.querySelector("nav");
  toggle: boolean = false;
  onClick():void{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  onDisplay():void {
   this.toggle =!this.toggle;
  }
}
