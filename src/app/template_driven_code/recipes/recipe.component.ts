import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeService } from '../shared/recipe.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  // providers: [RecipeService]
})
export class RecipeComponent implements OnInit {
  // selectedRecipe!: Recipe;

  // constructor( private recipeService: RecipeService) {
  // }

  constructor() {
    }

  ngOnInit() {
    //setup listener - no longer needed after adding router
    // this.recipeService.recipeSelected
    //      .subscribe(
    //        (recipe: Recipe) => {
    //          this.selectedRecipe = recipe;
    //        }
    //      )    
  }
}
