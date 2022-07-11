import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];

  private subShoppingService: Subscription;

  constructor(private shoppingService: ShoppingListService) { }
  ngOnDestroy(): void {
    this.subShoppingService.unsubscribe();
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.subShoppingService = this.shoppingService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
    }
    );
  }
  


  // addIngredientFromAddButton(ingredient: Ingredient){
  //   this.ingredients.push(ingredient);
  // }
}

