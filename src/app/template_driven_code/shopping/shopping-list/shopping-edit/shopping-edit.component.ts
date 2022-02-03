import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import {Ingredient} from '../../../shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // properties 
  @ViewChild('formInfo') editForm!:NgForm;
  subscription!:Subscription;
  editItem!: Ingredient; 
  editMode = false;
  editItemIndex!: number;

  constructor( private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    //listening to the shopping list - parent/child relationship - subscribe
    //get index of the selected ingredients to retrieve the name and amount
    //access the form with viewChild
    this.subscription = this.shoppingListService.editingIngredient
       .subscribe(
         (index: number) => {
            this.editMode = true;
            this.editItemIndex = index;
            this.editItem = this.shoppingListService.getIngredientById(this.editItemIndex);
            this.editForm.form.setValue(
              {name: this.editItem.name,
              amount: this.editItem.amount});            
       });
    }

   onAddItem(shoppingForm: NgForm) {
     console.log('Add shopping items');
     const ingredientName = shoppingForm.value.name;
     const ingredientAmount = shoppingForm.value.amount;
     const newIngredient = new Ingredient(ingredientName, ingredientAmount);

     if (this.editMode) {
         this.shoppingListService.updateIngredients(this.editItemIndex,newIngredient);
     } else  {
       // this.ingredientAdded.emit(newIngredient);
       this.shoppingListService.onIngredientAdded(newIngredient);
     }
   }

   onClear() {
    console.log('click on the reset/clear button')
    this.editForm.form.reset();
    this.editMode = false;
   }

   onDelete(){
     //remove  from the array the selected item      
     this.shoppingListService.deleteIngredient(this.editItemIndex);
     this.onClear();      
   }

   ngOnDestroy(): void {
    this.subscription.unsubscribe();   
   }
}
