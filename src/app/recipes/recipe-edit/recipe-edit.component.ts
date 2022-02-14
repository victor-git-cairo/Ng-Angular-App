import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode: boolean = false;
  recipeForm!: FormGroup;

  // https://www.koderhq.com/tutorial/angular/routing-parameter/

  constructor( private route: ActivatedRoute, 
    private recipeService: RecipeService) { }

  ngOnInit(): void {
    
    this.route.params
      .subscribe((params: Params) => {
        this.id = params['id'];
        this.editMode = params['id'] != null;
        this.initForm()
      })
  }

  // if edit mode then populate the form with the recipe from selected id
  initForm(){

    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if ( this.editMode) {
       const recipe = this.recipeService.getRecipesById(this.id)
       recipeName = recipe.name;
       recipeImagePath = recipe.imagePath;
       recipeDescription = recipe.description;
       console.log(recipe['ingredients']);

       if (recipe['ingredients']) {
         for ( let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              ingredientname: new FormControl(ingredient.name),
              ingredientamount: new FormControl(ingredient.amount)
            })
          );  
         }
       }
    }
    // https://stackoverflow.com/questions/58376709/cannot-find-control-with-name
    // https://stackblitz.com/edit/angular-reactive-forms-mrrnp2
    // https://appdividend.com/2019/12/19/angular-formarray-example-formarray-in-angular/

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description':new FormControl(recipeDescription),
      'ingredients': recipeIngredients
    })
  }
  
  get controls() {  

    //console.log(this.recipeForm.get('ingredients'))
    console.log((this.recipeForm.get('ingredients') as FormArray).controls);
    return (this.recipeForm.get('ingredients') as FormArray).controls;

}
  
  onSubmit() {
    console.log(this.recipeForm);
    
  }
}
