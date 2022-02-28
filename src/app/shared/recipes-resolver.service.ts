import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';
import { DataStorageService } from './data-storage.service';

import {
  Resolve, 
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]>{ 
  

  constructor(private DataStorageService :DataStorageService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
    return this.DataStorageService.fetchRecipes();
  }

 
}
