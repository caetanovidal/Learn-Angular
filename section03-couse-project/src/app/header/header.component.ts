import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output() shopList = new EventEmitter<boolean>();
    @Output() recipList = new EventEmitter<boolean>();

    recipeList(){
        this.recipList.emit(true);
        this.shopList.emit(false);
    }

    shoppingList(){
        this.shopList.emit(true);
        this.recipList.emit(false);
        console.log('test');
    }

}