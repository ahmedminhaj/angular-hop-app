import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // @Output() recipeSelete = new EventEmitter<void>();
  @Input('recipeInfo') recipe!: Recipe;
  @Input() index!: number; 
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelete(){
    // this.recipeSelete.emit()
    // this.recipeService.recipeSeleted.next(this.recipe)
  }

}
