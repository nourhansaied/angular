import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {
// dependncy injection
  userName:string = "nour saeed";
  imgSrc: string = "../../assets/Web-design-1.jpg";
  isMaried: boolean = false;
  inputValue: string = "hi"
  price : number = 3000;
  friends: string[] = ["nour", "ahmed", "mohamed","aya"]

  baseURL = "https://image.tmdb.org/t/p/w500"
  movies: any = []
  users: any =[]
  constructor(bl7: UserDataService, _moviesService: MoviesService) { 
    // this.isMaried = "asdhkaj"

    this.users = bl7.users

    _moviesService.getMovies().subscribe(
      (res) => { this.movies = res['results']},
      (error) => {
        console.log(error);
      },
      () => {console.log("Done");
       }
    );
  }

  test(info) {

    console.log("info");
    
  }

}