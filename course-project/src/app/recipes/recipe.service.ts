import { Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
          'Tasty Schnitzel', 
          'A super-tasty Schnitzel - just awesome!', 
          'https://www.smalltownwoman.com/wp-content/uploads/2022/09/Chicken-Schnitzel-Recipe-Card-1.jpg',
          [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
          ]
        ),
        new Recipe(
          'Big Fat Burger', 
          'What else you need to say?', 
          'https://moinhoglobo.com.br/wp-content/uploads/2019/05/16-hamburguer.jpeg',
          [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
          ]
        )
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
    }
}