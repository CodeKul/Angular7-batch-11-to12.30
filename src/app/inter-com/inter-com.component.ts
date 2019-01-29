import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-inter-com',
  templateUrl: './inter-com.component.html',
  styleUrls: ['./inter-com.component.css']
})
export class InterComComponent implements OnInit {
prg :number = 0;
prgStr : string;
  constructor() { }

  ngOnInit() {
  }
  onClick(btn:number){
if(btn === 1){
  this.prgStr = `${this.prg ++}%`;
//  console.log(this.prg);
 console.log(`${this.prg++}%`);
 
}
if(btn === 2){
  // -- this.prg;
  this.prgStr = `${--this.prg}%`;
  console.log(`${--this.prg}%`);
}
  }
}
