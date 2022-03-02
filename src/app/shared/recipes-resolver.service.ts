import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';
import { DataStorageService } from './data-storage.service';

import {
  Resolve, 
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]>{ 
  

  constructor(private DataStorageService :DataStorageService,
    private RecipeServices: RecipeService ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
    const recipe = this.RecipeServices.getRecipes();
    if (recipe.length === 0) {
      return this.DataStorageService.fetchRecipes();
    } else {
       return recipe;
    }    
  }

 
}
