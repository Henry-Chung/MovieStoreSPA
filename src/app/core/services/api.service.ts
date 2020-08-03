import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //private readonly....
  constructor(protected http: HttpClient) {}

  // get movies by genre
  // get all genres
  // get movies purchased by user
  // http://localhost:58601/api/genres
  // rxjs library

  // publish/subscribe

  // news Letters...we subscribe to those news letter, whenever there is a breaking news we get notification
  // we make an Http call, but that http call will only be made and will only receive data when you subscribe
  // Observes can be finite or infinite
  // http call is a finite observable

  getAll(path: string): Observable<any[]> {
    // we need to append the common url with path that is being passed
    // map is same as select in C# LINQ
    // 1, 2, 3 select, map (n => n*n ) = 1, 4, 9
    // 1, 2, 3 where, filter(n => n > 2) = 3
    return this.http
      .get(`${environment.apiUrl}${path}`)
      .pipe(map((resp) => resp as any[]));
  }

  // get movie by movie id
  // et userinfo by id
  // http://localhost:58601/api/movies/1
  getOne(path: string, id?: number): Observable<any> {
    let getUrl: string;
    if (id) {
      getUrl = `${environment.apiUrl}${path}` + '/' + id;
    } else {
      getUrl = `${environment.apiUrl}${path}`;
    }

    return this.http.get(getUrl).pipe(map((resp) => resp as any));
  }

  // post some information
  // Login, signup, create movie
  create() {}

  // update movie info
  // update userinfo by id
  update() {}

  // delete favorite movie
  delete() {}
}
