import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  // ingredientAdded = new EventEmitter<Ingredient[]>();
  ingredientAdded = new Subject<Ingredient[]>();
  editingIngredient = new Subject<number>()
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Orange', 10)
  ];

  constructor() { }

  getIngredients() {
    console.log('shoppinglist service - getIngredient method')
    return this.ingredients.slice();
  }

  getIngredientById(index: number) {
    return this.ingredients[index];
  }

  onIngredientAdded(ingredient: Ingredient) {
    console.log('shoppinglist service - onIngredientAdded method');
    this.ingredients.push(ingredient);
    // this.ingredientAdded.emit(this.ingredients.slice())
    this.ingredientAdded.next(this.ingredients.slice()) // this return an observable which is listed in a subscriber
  }

  addIngredients(ingredients: Ingredient[]) {
    console.log('shippinglist service - add new ingredients')
    this.ingredients.push(...ingredients);
    console.log(this.ingredients.slice());
    // this.ingredientAdded.emit(this.ingredients.slice()); - this does with EventEmitter
    this.ingredientAdded.next(this.ingredients.slice());
  }

  updateIngredients(index: number, ingredientItem: Ingredient) {
    console.log('shippinglist service - updated ingredient item')
    this.ingredients[index] = ingredientItem
    this.ingredientAdded.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientAdded.next(this.ingredients.slice());
  }
}