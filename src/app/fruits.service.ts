import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
names = [];
  constructor(private http: HttpClient) { }
  
  getFruits(){
    return this.names = [
      'apple',
      'banana',
      'mango',
      'pineapple'
      ]
  }

getMethod(){
   return this.http.get('http://api.icndb.com/jokes/random');
}
// query params in get service syntax

getMethod1(id){
  return this.http.get('https://reqres.in/api/users',{
    params: new HttpParams().set('id',id)
  });

}
}