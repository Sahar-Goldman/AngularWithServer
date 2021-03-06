  
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie.model.js';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Promise<Movie[]> {
    let url = `${environment.URL}/movies`;
    return this.http.get<Movie[]>(url).toPromise();
  }

  addMovie(movie: Movie): Promise<Movie> {
    let url = `${environment.URL}/movies`;
    return this.http.post<Movie>(url, movie)
      .toPromise();
  }
}