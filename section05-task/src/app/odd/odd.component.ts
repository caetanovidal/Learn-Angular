import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  constructor() { }

  @Input() odd: number;

  ngOnInit(): void {
  }

  isOdd(dat:{num: number}){
    this.odd = dat.num;
  }

}
