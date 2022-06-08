import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret-button',
  templateUrl: './secret-button.component.html',
  styleUrls: ['./secret-button.component.css']
})
export class SecretButtonComponent implements OnInit {

  clicksOnButton = [];
  count = 0;
  constructor() { }

  ngOnInit(): void {
  }

  showMsg(){
    this.count++;
    this.clicksOnButton.push(this.count);
    this.clicksOnButton.length
  }

  getColor(){
    if (this.clicksOnButton.length >= 5 ){
      return 'blue';
    }else{
      return 'white';
    }
  }

}
