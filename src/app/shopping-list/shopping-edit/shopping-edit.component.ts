import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  
  // @ViewChild('nameInput') nameInputRef!: ElementRef;
  // @ViewChild('amountInput') amountInputRef!: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('f') slForm!: NgForm;
  editSubscription!: Subscription;
  editMode = false;
  editedItemIndex!: number;
  editedItem!: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.editSubscription = this.shoppingListService.startEditing.subscribe(
      (index: number)=>{
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredientById(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }

  onSubmitItem(form: NgForm){
    const value = form.value;
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(value.name, value.amount)
    // this.ingredientAdded.emit(newIngredient)
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
    }else{
      this.shoppingListService.addIngredient(newIngredient)
    }
    this.editMode = false
    form.reset()
  }

  onClear(){
    this.slForm.reset()
    this.editMode = false
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex)
    this.onClear()
  }

}
