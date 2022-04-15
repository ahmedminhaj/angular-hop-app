import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingredient[];
  igredientChangeSub! : Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()
    this.igredientChangeSub = this.shoppingListService.ingredientChanged.subscribe((ingredients: Ingredient[])=>{
      this.ingredients = ingredients;
    })
  }
  onEditItem(id: number){
    this.shoppingListService.startEditing.next(id)
  }

  ngOnDestroy(): void {
    this.igredientChangeSub.unsubscribe()
  }

  // onIngredientAdded(ingredient: Ingredient){
  //   this.ingredients.push(ingredient)
  // }

}
