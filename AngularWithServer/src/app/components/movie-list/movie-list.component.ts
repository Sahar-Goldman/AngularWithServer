import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/Movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies$!: Promise<Movie[]>;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.movies$ = this.data.getAllMovies();
  }

}