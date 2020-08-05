import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 3rd party libraries
import {
  NgbCarouselModule,
  NgbCollapseModule,
  NgbDropdownModule,
  NgbModalModule,
  NgbPaginationModule,
  NgbTabsetModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GenresComponent } from './genres/genres.component';
import { HeaderComponent } from './core/layout/header.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { FavoritesComponent } from './account/Favorites/favorites/favorites.component';
import { PurchasesComponent } from './account/purchases/purchases/purchases.component';
import { ProfileComponent } from './account/profile/profile/profile.component';
import { LoginpartialComponent } from './core/loginpartial/loginpartial/loginpartial.component';
import { OverviewPipeComponent } from './shared/pipes/overview-pipe/overview-pipe.component';

@NgModule({
  // Components, if you wanna use a Component in Angular they should be declared inside atleast one module
  declarations: [
    AppComponent,
    HomeComponent,
    GenresComponent,
    HeaderComponent,
    SignUpComponent,
    LoginComponent,
    MovieDetailsComponent,
    MovieCardComponent,
    MovieListComponent,
    FavoritesComponent,
    PurchasesComponent,
    ProfileComponent,
    LoginpartialComponent,
    OverviewPipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbCarouselModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbPaginationModule,
    NgbTabsetModule,
    NgbAlertModule,
  ],

  // Dependency, Injection
  providers: [],

  // we can select which componenet needs to be started when application starts
  // main --> AppModule --> boostrap AppComponent
  bootstrap: [AppComponent],
})

// its and Typscript class
// Decorators are Like Attributes in C#
export class AppModule {}
