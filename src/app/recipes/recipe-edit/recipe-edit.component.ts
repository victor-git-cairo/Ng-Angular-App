import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})

export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode = false;
  recipeForm!: FormGroup;

  // https://www.koderhq.com/tutorial/angular/routing-parameter/

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) { }

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

    if (this.editMode) {
       const recipe = this.recipeService.getRecipesById(this.id)
       recipeName = recipe.name;
       recipeImagePath = recipe.imagePath;
       recipeDescription = recipe.description;
       console.log(recipe['ingredients']);

       if (recipe['ingredients']) {
         for ( let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              ingredientname: new FormControl(ingredient.name,Validators.required),
              ingredientamount: new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );  
         }
       }
    }
    // https://stackoverflow.com/questions/58376709/cannot-find-control-with-name
    // https://stackblitz.com/edit/angular-reactive-forms-mrrnp2
    // https://appdividend.com/2019/12/19/angular-formarray-example-formarray-in-angular/

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description':new FormControl(recipeDescription,Validators.required),
      'ingredients': recipeIngredients
    })
  }
  
  get controls() {  
    //console.log(this.recipeForm.get('ingredients'))
    //console.log((this.recipeForm.get('ingredients') as FormArray).controls);
    return (this.recipeForm.get('ingredients') as FormArray).controls;

}
  
  onSubmit() {
    // console.log(this.recipeForm.value);   
    // const newRecipe = new Recipe(
    // this.recipeForm.value['name'],
    // this.recipeForm.value['description'],
    // this.recipeForm.value['imagePath'],
    // this.recipeForm.value['ingredients']);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onAddIngredient() {
    console.log('test');
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        ingredientname: new FormControl('null',Validators.required),
        ingredientamount: new FormControl('null',[ Validators.required, Validators.pattern(/^[1-9]+[0-9]$/)])
      })
    ); 
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
