import { Component, OnInit } from "@angular/core";
import { DataService } from "./data-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  posterUrl: string;
  NowPage: number;
  MoveTitle: string;
  Year: string;
  Score: number;
  Fames: number;
  Data_Release: string;
  overview: string;
  NowMovi;
  drop: boolean = false;
  BUF = "http://image.tmdb.org/t/p/w342/";
  URLS = "";
  constructor(public Service: DataService) {}
  title = "app";
  movies = [];
  ngOnInit() {
    this.NowPage = 1;
    this.Service.GetMovies(1).subscribe(
      data => {
        this.movies = data.results.slice(0, 12);
      },
      error => {},
      () => {}
    );
  }
  GetPage(index: number, flag: boolean) {
    if (index >= 1) {
      this.NowPage = index;
      this.movies = this.Service.GetPage(index - 1);
    }
  }
  GetStart() {
    this.movies = this.Service.GetPage(0);
    this.NowPage = 1;
  }
  GetEnd() {
    let len = this.Service.GetLenth();
    this.NowPage = len;
    this.movies = this.Service.GetPage(len - 1);
  }
  showFilm(move) {
    this.NowMovi = move;
    this.overview = move.overview;
    this.Data_Release = move.release_date;
    this.Score = move.vote_average;
    this.Year = move.release_date.slice(0, 4);
    this.Fames = move.popularity;
    this.MoveTitle = move.original_title;
    this.posterUrl = move.poster_path;
    this.URLS = "url(" + this.BUF + move.poster_path + ")";
    this.drop = true;
  }
  GetList() {
    this.drop = false;
  }
  GetNext() {
    let index = this.movies.indexOf(this.NowMovi);
    if (index != this.movies.length - 1) {
      this.showFilm(this.movies[index + 1]);
    } else {
      this.GetList();
    }
  }
}
