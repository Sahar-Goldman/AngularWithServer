import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddMovieComponent } from "./components/add-movie/add-movie.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";


const routes: Routes = [
    { path: '', redirectTo: 'movies', pathMatch: 'full'},
    { path: 'movies', component: MovieListComponent }, 
    { path: 'add', component: AddMovieComponent }
  ];
  
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ], 
    exports: [
        RouterModule
    ]
})
export class AppRoutModule {

}