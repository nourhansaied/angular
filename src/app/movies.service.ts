import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http : HttpClient) { }

  getMovies() : Observable<Object> {
   return this.http.get("https://api.themoviedb.org/3/trending/movie/day?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff")
  }
}


