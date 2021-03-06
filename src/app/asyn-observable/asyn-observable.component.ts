import { FruitsService } from './../fruits.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asyn-observable',
  templateUrl: './asyn-observable.component.html',
  styleUrls: ['./asyn-observable.component.css']
})
export class AsynObservableComponent implements OnInit {

  constructor(private fruitsService: FruitsService) { }

  ngOnInit() {
    this.fruitsService.foo.subscribe(res => {
      console.log("res ", res);

    })
  }

}
