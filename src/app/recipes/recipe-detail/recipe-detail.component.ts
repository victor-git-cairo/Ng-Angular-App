import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipes/recipes.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/shared/recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],

})

// https://stackoverflow.com/questions/54104187/typescript-complain-has-no-initializer-and-is-not-definitely-assigned-in-the-co
// Property 'recipe' has no initializer and is not definitely assigned in the constructor.

export class RecipeDetailComponent implements OnInit {
  // @Input() recipe!: Recipe;
  id!: number;
  recipe!: Recipe;

  constructor(private shoppingService: ShoppingListService,
              private route: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService) { }

  // https://stackoverflow.com/questions/54496398/typescript-type-string-undefined-is-not-assignable-to-type-string
  // Argument of type 'number | undefined' is not assignable to parameter of type 'number'. Type 'undefined' is not assignable to type 'number
  ngOnInit(): void {

    this.route.params
      .subscribe(
        ( params: Params) => {
          console.log( 'params changed')
          console.log( params['id'])
          this.id = this.route.snapshot.params['id'];
          this.recipe = this.recipeService.getRecipesById(this.id!);
        }   
      )  
  }

  onAddIngredientsToShoppingList(){
    console.log('add ingredient to Shopping List method call')
    this.shoppingService.addIngredients(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }


}
