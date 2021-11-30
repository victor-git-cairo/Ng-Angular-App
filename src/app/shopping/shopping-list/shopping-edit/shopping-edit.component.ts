import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import {Ingredient} from '../../../shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // properties
  @ViewChild('nameInput')nameInputRef: ElementRef | undefined;
  @ViewChild('amountInput')amountInputRef: ElementRef | undefined;
 

  constructor( private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
    console.log('Add shopping items');
    const ingredientName = this.nameInputRef!.nativeElement.value;
    const ingredientAmount = this.amountInputRef!.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount)
    // this.ingredientAdded.emit(newIngredient);
    this.shoppingListService.onIngredientAdded(newIngredient);
   }
}
