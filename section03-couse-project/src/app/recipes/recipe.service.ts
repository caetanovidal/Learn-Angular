import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService{
    private AllRecipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply a test', 'https://www.simplyrecipes.com/thmb/mbN8mXZ0srgAT1YrDU61183t0uM=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1b-ea13798d224048b3a28afb0936c9b645.jpg', [
            new Ingredient('Apples', 6),
            new Ingredient('Banana', 8)
        ]),
        new Recipe('Another test recipe', 'This is another test', 'https://www.simplyrecipes.com/thmb/mbN8mXZ0srgAT1YrDU61183t0uM=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1b-ea13798d224048b3a28afb0936c9b645.jpg', [
            new Ingredient('Potatos', 8),
            new Ingredient('Bread', 6),
        ])
    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes(){
        return this.AllRecipes.slice(); // slice() returns a copy of the array
    }

    getRecipe(index: number){
        return this.AllRecipes[index]
    }
}