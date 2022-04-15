import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeItemSeleted = new EventEmitter<Recipe>()
  recipes! : Recipe[];

  constructor(private recipeService: RecipeService, private router: Router, private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes()
  }

  onRecipeSeleted(recipe : Recipe){
    // this.recipeItemSeleted.emit(recipe)
  }

  onAddNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.routes})
  }

}
