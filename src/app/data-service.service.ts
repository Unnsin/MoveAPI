import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DataService {
  Movies = []; 
  Page_col:number[] = [];
  key = 'ebea8cfca72fdff8d2624ad7bbf78e4c'; 
  Page:number = 2;
  constructor(private http: HttpClient) { 

      this.GetMovies(1).subscribe(data => {
      for(var i=0;i<data.results.length;i++){
        this.Movies.push(data.results[i]);
      }
      },
      error=>{},
      ()=>{
        this.GetMovies(2).subscribe(data => {
        for(var i=0;i<data.results.length;i++){
          this.Movies.push(data.results[i]);
        }
        },
        error=>{},
        ()=>{this.GetPageCol();});
      });
      
  }

  GetMovies(Page:number):Observable<any>{
    return this.http.get('http://api.themoviedb.org/3/movie/now_playing?api_key=' + this.key+"&page="+ Page);
  }
  GetPageCol(){
    this.Page_col.length = 0;
    var col = this.Movies.length;
    for(var i=0;i<col/12;i++){
      this.Page_col.push(i+1);
    }
    return this.Page_col;
  }

  GetPage(numb:number){
    if(numb == this.Page_col.length-2){
      this.GetMovies(this.Page+1).subscribe(data => {
        for(var i=0;i<data.results.length;i++){
          this.Movies.push(data.results[i]);
        }
        },
        error=>{},
        ()=>{this.GetPageCol(); this.Page++;});
    }
    return this.Movies.slice(numb*12,(numb*12)+12);
  }
  GetLenth(){
    return this.Page_col.length;
  }
}
