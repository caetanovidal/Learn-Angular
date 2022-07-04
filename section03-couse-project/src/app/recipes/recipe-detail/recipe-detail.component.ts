import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  id: number;

  constructor(private shoplistService: ShoppingListService, private routeActived: ActivatedRoute,
    private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.routeActived.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  sendToShopList(){
    // for (let ingredient of this.recipe.Ingredients){
    //   this.shoplistService.addIngredientFromAddButton(ingredient);
    // }
    this.shoplistService.addIngredients(this.recipe.Ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.routeActived})
  }
}
