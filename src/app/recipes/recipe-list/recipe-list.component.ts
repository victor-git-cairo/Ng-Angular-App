import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cuban Fricasee', 'Traditional Cuban Food','https://picsum.photos/200/300'),
    new Recipe('Mexican Fricasee', 'Traditional Mexican Food','https://picsum.photos/200/300')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
