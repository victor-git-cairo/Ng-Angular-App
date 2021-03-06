import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../recipes/recipes.model';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();
  
  private recipes: Recipe[] = [];

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Cuban Fricasee',
  //     'Popular Cuban Food',
  //     'https://source.unsplash.com/random/600x600/?food=7',
  //     [
  //       new Ingredient('Congris', 1),
  //       new Ingredient('Pollo En Salsa', 1),
  //       new Ingredient('Yuca Mojo', 1),
  //       new Ingredient('Salsa', 1)
  //     ]
  //   ),
  //   new Recipe(
  //     'Chicken Enchiladas',
  //     'Popular Mexican Food',
  //     'https://picsum.photos/600/600',
  //     [
  //       new Ingredient('Pound Tomatillos', 1),
  //       new Ingredient('Garlic Cloves', 4),
  //       new Ingredient('Jalapenos', 2),
  //       new Ingredient('tea spoon salt', 7)
  //     ]
  //   ),
  //   new Recipe(
  //     'Ajiaco Cubano',
  //     'Popular Cuban Dish',
  //     'https://picsum.photos/600/600',
  //     [
  //       new Ingredient('Boniato', 11),
  //       new Ingredient('Yuca', 10),
  //       new Ingredient('Calabaza', 20),
  //       new Ingredient('Platanos Macho', 10)    
  //     ]
  //   )
  // ];


  constructor() { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    console.log('getRecipe method call');
    return this.recipes.slice();
  }

  getRecipesById(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
