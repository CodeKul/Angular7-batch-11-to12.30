import { Component, OnInit } from '@angular/core';
import { Crd } from '../mix-card/crd';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  public name = 'codekul.com';
  public amt = 100;
  public type = 'button';
  public cls = "btn btn-danger";
  public isDisabled = false;
  public myId = 'Melayer';
  public hasError = true;
  public anyThing : string;
   pqr:Crd
   clkEvent:string;
  constructor() {
    this.pqr = {} as Crd;
    this.pqr.imgUrl = 'https://www.traccar.org/images/server/feature-server.svg';
    this.pqr.title = 'Server';
    this.pqr.msg = 'Traccar software provides high performance and stability on Windows, Linux or any other platform. The server can be self-hosted in the cloud or on-premise. We also provide a number of hosted options with professional support.'
  }

  ngOnInit() {
  }
  onClick(pqr:Crd){
 console.log("pqr==>event receve ", pqr);
this.clkEvent = pqr.title
  }
  public greetMe() {
    return 'welcome' + this.name;
  }
  public clickMe(ev){
 console.log("ev ", ev);
  }
  public logMe(myInput: string){
 console.log( myInput);
  }

}