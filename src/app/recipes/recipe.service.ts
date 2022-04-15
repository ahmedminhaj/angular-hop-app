import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    // recipeSeleted = new Subject<Recipe>();
    private recipes : Recipe[] = [
        new Recipe(
            'Veg Recipe', 
            'Spicy vegetable curry', 
            'https://img.delicious.com.au/Whdi4i8g/w759-h506-cfill/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg',
            [
                new Ingredient('Egg', 1),
                new Ingredient('Cornflower', 1),
            ]
        ),
        new Recipe(
            'Mix Fruit Recipe', 
            'Toasted Bread with Fruit', 
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F22%2F16383-basic-crepes-mfs_003.jpg',
            [
                new Ingredient('Bread', 1),
                new Ingredient('Mango', 1),
                new Ingredient('Blueberry', 3),
            ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice()
    }

    getRecipe(index: number){
        return this.recipes[index]
    }

    addIngredientToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients)
    }
}