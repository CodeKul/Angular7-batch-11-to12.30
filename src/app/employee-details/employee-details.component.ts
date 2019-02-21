import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit ,OnDestroy{
  abc: string;
  sub :Subscription
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    //  this.usNm = this.activatedRoute.snapshot.params['usNm'];
    this.activatedRoute.params.subscribe(newParam => {
      this.abc = newParam['usNm']
    })
  }
  ngOnDestroy(){
    this.sub.unsubscribe()
  }
  changeUsNm(chUsNm: string) {
    console.log(chUsNm);
    // this.usNm = chUsNm
    this.router.navigate(['employeedetails', chUsNm])
  }
}
