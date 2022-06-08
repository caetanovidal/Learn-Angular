import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private shoplistService: ShoppingListService) { }

  ngOnInit(): void {
  }

  sendToShopList(){
    // for (let ingredient of this.recipe.Ingredients){
    //   this.shoplistService.addIngredientFromAddButton(ingredient);
    // }
    this.shoplistService.addIngredients(this.recipe.Ingredients);
  }

}
