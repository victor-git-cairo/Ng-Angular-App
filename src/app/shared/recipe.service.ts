import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Cuban Fricasee', 'Traditional Cuban Food','https://picsum.photos/200/300'),
    new Recipe('Mexican Fricasee', 'Traditional Mexican Food','https://picsum.photos/200/300')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
