import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit, OnDestroy {


  constructor(private recipeService: RecipeService) { }

  ngOnDestroy(): void {
  }

  showDetails: Recipe;

  showDetail(recipe: Recipe){
    this.showDetails = recipe;
    console.log(recipe);
  }

  ngOnInit(): void {

  }

}
