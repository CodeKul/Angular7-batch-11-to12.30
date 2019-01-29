import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {
val : string;
@ViewChild('nm')
nmVar :ElementRef;

  constructor() { }

  ngOnInit() {
  }
  clickBtn(abc :string){
console.log(abc);
// this.val = abc;
this.val = this.nmVar.nativeElement.value
  }
}
