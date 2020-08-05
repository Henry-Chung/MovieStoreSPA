import { map } from 'rxjs/operators';
import { JwtStorageService } from './jwt-storage.service';
import { Observable } from 'rxjs';
import { Login } from './../../shared/models/login';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private apiService: ApiService,
    private jwtStorage: JwtStorageService
  ) {}

  login(userLogin: Login): Observable<boolean> {
    //call our API  http://localhost:58601/api/account/login
    return this.apiService.create('account/login', userLogin).pipe(
      map((response) => {
        if (response) {
          // store the token in local storage
          this.jwtStorage.saveToken(response.token);
          // decode the token and populate User Info
          return true;
        }
        return false;
      })
    );
  }
  logout() {}
}
