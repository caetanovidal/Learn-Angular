import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor() { }

  gameNumber: number = 0;

  @Output('number') id;

  //@Output('gameEvent') gameEvent = new EventEmitter<{num: number}>();

  @Output('gameEvent') intervalField = new EventEmitter<number>();

  ngOnInit(): void {
  }

  startGame(){
    // this.id = setInterval(() => {this.gameNumber += Math.floor(Math.random() * 10)
    //   this.gameEvent.emit({num: this.gameNumber})}
    //   , 1000); 

    this.id = setInterval(() => {
      this.intervalField.emit(this.gameNumber + 1);
      this.gameNumber++;
    }, 1000);
  }

  stopGame(){
    clearInterval(this.id);
  }

}
