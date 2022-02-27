import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {

  public clickCounter: number = 0;  
  public imageUrl: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  public name: string = "";

  addClick(){
    this.clickCounter++;
  }

  resetCounter(){
    this.clickCounter = 0;
  }

}
