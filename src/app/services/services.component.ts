import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FruitsService } from '../fruits.service';
import { Data } from './postdata';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  postDataForm:FormGroup;
  fruitList = [];
  joke :string;
  // names = [
  // 'apple',
  // 'banana',
  // 'mango',
  // 'pineapple'
  // ]
  constructor(private fruitsService: FruitsService,
    private fb:FormBuilder) { }

  ngOnInit() {
    this.fruitList = this.fruitsService.getFruits();
    this.callGetMethod();
    this.postDataForm = this.fb.group({
      name:[''],
      job:['']
    })
  }

  callGetMethod() {
    this.fruitsService.getMethod().subscribe(result => {
      console.log(result);
      console.log(result['value'].joke);
      this.joke = result['value'].joke
    })
  }

  submitPostData(){
    let formData : Data = {} as Data;
    formData = this.postDataForm.value;
    this.fruitsService.postForm(formData).subscribe(res =>{
      console.log(res);
      
    })
   }
}
