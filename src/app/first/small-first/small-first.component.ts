import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-first',
  template: `
    <h1>Tour of Heroes</h1>
  `,
  styles: [
    'h1 { font-weight: normal; }'
  ]
})
export class SmallFirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
