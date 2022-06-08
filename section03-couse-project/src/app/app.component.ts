import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'section03-couse-project';

  recipeList = true;
  shopList = false;

  recipeEvent(event: boolean){
    this.recipeList = event;
    this.shopList = !event;
  }

  shoppingEvent(event: boolean){
    this.shopList = event;
    this.recipeList = !event;
  }
}
