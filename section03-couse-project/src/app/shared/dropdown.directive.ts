import { Directive, ElementRef, HostBinding, HostListener, OnInit } from "@angular/core";

@Directive({
    selector: "[appDropdown]"
})
export class DropdownDirective {
    @HostBinding("class.open") isOpen: boolean = false;

    @HostListener("document:click") toggleOpen(){
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
        console.log(this.isOpen);
    }

    constructor(private elRef: ElementRef) {}

}