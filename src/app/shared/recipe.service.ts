import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Cuban Fricasee', 'Traditional Cuban Food','https://source.unsplash.com/random/200x300/?food=7'),
    new Recipe('Mexican Fricasee', 'Traditional Mexican Food','https://picsum.photos/200/300')
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

  
}
