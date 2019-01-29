import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
displayName = false;
hoverVar = false;
displayElse = true;
public color= "yellow";
students = ['nirali','sarika','surabhi','kalyani','sonal']

  constructor() { }

  ngOnInit() {
  }

}
