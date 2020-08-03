import { MovieService } from './../../core/services/movie.service';
import { Movie } from './../../shared/models/movie';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  id: number;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      this.id = +p.get('id');

      this.movieService.getMovieDetails(this.id).subscribe((m) => {
        this.movie = m;
        console.log(this.movie);
      });
    });
  }
}
