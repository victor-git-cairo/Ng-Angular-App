import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
 ingredientAdded = new EventEmitter<Ingredient[]>();
   private ingredients:Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Orange',10)
  ];

  constructor() { }

  getIngredients() {
    console.log('getIngredient method call')
    return this.ingredients.slice();
  }

  onIngredientAdded(ingredient: Ingredient){
    console.log('onIngredientAdded method call');
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]){
   console.log('addIngredients method call')
   this.ingredients.push(...ingredients);
   console.log(this.ingredients.slice());
   this.ingredientAdded.emit(this.ingredients.slice());

  }
}