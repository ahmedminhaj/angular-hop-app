import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  seletedRecipe! : Recipe;
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    // this.recipeService.recipeSeleted.subscribe((recipe: Recipe)=>{
    //   this.seletedRecipe = recipe
    // })
  }

}
