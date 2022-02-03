import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // providers:[ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients!:Ingredient[];

  constructor( private shoppingListService: ShoppingListService) { } 

  ngOnInit(): void {
    console.log('shopping list - OnInit Component');
    this.ingredients = this.shoppingListService.getIngredients();

    // subscription to the event response - when a new ingredient is added or updated
    this.shoppingListService.ingredientAdded
    .subscribe(
      (ingredient: Ingredient[]) => {
         this.ingredients = ingredient
      })
  }

  onEditItem(index: number){
    // send out the index number with the subject event emitter
    this.shoppingListService.editingIngredient.next(index);
  }
}
