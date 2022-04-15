import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent{
    // @Output() featureSelected = new EventEmitter<string>()
    // onSelete(feature:string){
    //     this.featureSelected.emit(feature)
    // }
    //use in header.component.html to navigate different component view without routing

    // href="#" 
    // (click)="onSelete('recipe')"
}