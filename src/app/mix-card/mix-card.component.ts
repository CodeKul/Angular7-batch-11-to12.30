import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Crd } from './crd';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-mix-card',
  templateUrl: './mix-card.component.html',
  styleUrls: ['./mix-card.component.css']
})
export class MixCardComponent implements OnInit {
  // crd:Crd;
  @Input()
  crd:Crd
@Output()
crdEv :EventEmitter<Crd> = new EventEmitter<Crd>();

  constructor() {
    // this.crd = {} as Crd;
    // this.crd.imgUrl = 'https://www.traccar.org/images/server/feature-server.svg';
    // this.crd.title = 'Server';
    // this.crd.msg = 'Traccar software provides high performance and stability on Windows, Linux or any other platform. The server can be self-hosted in the cloud or on-premise. We also provide a number of hosted options with professional support.'
   }

  ngOnInit() {
  }
  goSm(crd){
 console.log("crd ", crd.title);
 this.crdEv.emit(crd)
  }
}
