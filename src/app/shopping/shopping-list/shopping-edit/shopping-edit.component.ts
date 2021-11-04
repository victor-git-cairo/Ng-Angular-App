import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import {Ingredient} from '../../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // properties
  @ViewChild('nameInput')nameInputRef: ElementRef | undefined;
  @ViewChild('amountInput')amountInputRef: ElementRef | undefined;
  @Output()ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingredientName = this.nameInputRef!.nativeElement.value;
    const ingredientAmount = this.amountInputRef!.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount)
    this.ingredientAdded.emit(newIngredient);
  }
}
