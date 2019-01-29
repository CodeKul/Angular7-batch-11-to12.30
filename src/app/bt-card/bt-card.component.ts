import { element } from 'protractor';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bt-card',
  templateUrl: './bt-card.component.html',
  styleUrls: ['./bt-card.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class BtCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
