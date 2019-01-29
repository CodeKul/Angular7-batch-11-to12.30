import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button type="button " class="btn btn-success mt-2 mr-1" (click)="sendData(1)">plus</button>
<button type="button " class="btn btn-danger mt-2" (click)="sendData(2)">minus</button>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {
  @Output()
  evClick: EventEmitter<number> = new EventEmitter<number>()
  constructor() { }

  ngOnInit() {
  }

  sendData(btn: number) {
    this.evClick.emit(btn);
  }

}
