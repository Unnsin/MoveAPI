import { Component, OnInit } from '@angular/core';
import { DataService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  NowPage:number;
  drop:boolean = false;
  BUF = "http://image.tmdb.org/t/p/w342/";
  URLS = "";
  constructor(public Service: DataService){}
  title = 'app';
  movies = [];
  ngOnInit(){
    this.NowPage = 1;
    this.Service.GetMovies(1).subscribe(data => {
      this.movies = data.results.slice(0,12); 
    },error=>{},
    ()=>{} );
  }
  GetPage(index:number, flag:boolean){
    if(index >= 1){
    this.NowPage = index;
    this.movies = this.Service.GetPage(index-1);
    }
  }
  GetStart(){
    this.movies = this.Service.GetPage(0);
    this.NowPage = 1;
  }
  GetEnd(){
    let len = this.Service.GetLenth();
    this.NowPage = len;
    this.movies = this.Service.GetPage(len-1);
  }
  showFilm(move){
    this.URLS ='url(' + this.BUF + move.poster_path + ')'; 
    this.drop = !this.drop;
  }
  GetList(){
    this.drop = !this.drop;
  }
}
