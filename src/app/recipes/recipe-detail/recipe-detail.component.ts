import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipes/recipes.model';
import { RecipeService } from 'src/app/shared/recipe.service';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],

})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredientsToShoppingList(){
    console.log('add ingredient to Shopping List method call')
    this.shoppingService.addIngredients(this.recipe.ingredients);
  }
}
