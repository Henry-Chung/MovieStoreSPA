import { Movie } from './../shared/models/movie';
import { MovieService } from './../core/services/movie.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: Movie[];
  constructor(private movieService: MovieService) {}
  ngOnInit(): void {
    this.movieService.getTopMovies().subscribe((m) => {
      this.movies = m;
      console.log('show top movies');
      console.log(this.movies);
    });
  }
}

// its a super set of JS, its Strongly typed like C#, Java
// Angular cli will transiple TypeScript to JavaScript and send it to browser

// ASP.NET Converts ur razor syntax to HTML/JS ... similar concept
// Ctrl+P search for file names in Project
// Ctrl+Shift+p search VS Code
// Ctrl+/ comment/uncoment
// Ctrl+F search for text inside the file
// Ctrl+Shift+f global search for project
