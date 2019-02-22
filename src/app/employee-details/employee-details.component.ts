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
    //  this.usNm = this.activatedRoute.snapshot.params['usNm'];// reading variables using observable changes path but not welcome
    // this.activatedRoute.params.subscribe(newParam => {
    //   this.abc = newParam['usNm']
    // }) //reading variables using observable changes welcome value and path
      this.router.routerState.root.queryParams.subscribe(queryParamVar =>{
        this.abc = queryParamVar['ver'] //to read query params
      } )
  }
  ngOnDestroy(){
    this.sub.unsubscribe()
  }
  changeUsNm(chUsNm: string) {
    console.log(chUsNm);
    // this.usNm = chUsNm // reading variables using observable changes path but not welcome
    this.router.navigate(['employeedetails', chUsNm])
  }
}
