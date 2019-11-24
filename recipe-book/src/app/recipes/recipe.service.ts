import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.module';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'First recipe',
      'Description for the recipe',
      'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=-tA_cB-C'
    ),
    new Recipe(
      'Second recipe',
      'Description for the second recipe',
      'https://realfood.tesco.com/media/images/RFO-1400x919-ChickenTrayBake-27f51d31-bf3d-4135-aa70-57129b50d4ee-0-1400x919.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); // To avoid any possible changes to original array from outside
  }

  constructor() { }
}
