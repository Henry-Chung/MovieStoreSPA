import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../core/services/authentication.service';
import { Login } from './../../shared/models/login';
import { User } from './../../shared/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //  this property to display message in the UI
  invalidLogin: boolean;
  //  you went to user/purchases page => it redirect to login page
  // after successfull login go back to orginial page that it came from (user/purchases page)
  returnUrl: string;
  user: User;
  userLogin: Login = {
    email: '',
    password: '',
  };

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.authService.login(this.userLogin).subscribe((response) => {
      if (response) {
        // navigate to page retutn URL or Home page
        this.router.navigate(['/']);
      } else {
        this.invalidLogin = true;
      }
    });
  }
  login() {
    console.log('submit button clicked');
  }
}
