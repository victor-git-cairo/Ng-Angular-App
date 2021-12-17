import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cuban Fricasee', 
      'Popular Cuban Food',
      'https://source.unsplash.com/random/200x300/?food=7',
      [
        new Ingredient('Congris', 1),
        new Ingredient('Pollo En Salsa', 1),
        new Ingredient('Yuca Mojo', 1),
        new Ingredient('Salsa', 1)
      ]    
    ),
    
    new Recipe(
      'Chicken Enchiladas', 
      'Popular Mexican Food',
      'https://picsum.photos/200/300',
      [
        new Ingredient('Pound Tomatillos', 1),
        new Ingredient('Garlic Cloves', 4),
        new Ingredient('Jalapenos', 2),
        new Ingredient('tea spoon salt', 1/2)     
      ]
    )
  ];

  constructor() { }

  getRecipes() {
    console.log('getRecipe method call');
    return this.recipes.slice();
  }

  
}
