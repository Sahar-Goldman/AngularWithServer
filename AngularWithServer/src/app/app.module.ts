import { AppRoutModule } from './app-rout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }