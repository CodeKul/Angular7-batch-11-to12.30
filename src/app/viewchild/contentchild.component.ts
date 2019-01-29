import { Component, OnInit, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-contentchild',
  template: `
  <ng-content></ng-content>

    <p>
      contentchild works!
    </p>
  `,
  styles: []
})
export class ContentchildComponent implements OnInit {

// @ViewChild('al') undefine of nativeElement error
@ContentChild('al')
alContent : ElementRef;
  constructor() { 
  }

  ngOnInit() {
    console.log(this.alContent.nativeElement);
    
  }

}
