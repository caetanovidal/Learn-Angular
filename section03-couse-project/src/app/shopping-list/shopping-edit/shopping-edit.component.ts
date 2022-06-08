import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;

  @ViewChild('amountInput', {static: false}) amountInput: ElementRef;

  constructor(private shoppingService: ShoppingListService) { }  

  ngOnInit(): void {
  }

  addIngredient(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingService.addIngredientFromAddButton(newIngredient);
  }
}


