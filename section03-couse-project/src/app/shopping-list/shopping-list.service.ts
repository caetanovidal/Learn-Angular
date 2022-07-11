import { Ingredient } from "../shared/ingredient.model";
import { Subject } from 'rxjs'

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 6),
        new Ingredient('Potatos', 8)
      ];

    addIngredientFromAddButton(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    
    getIngredients(){
        return this.ingredients.slice();
    }

}