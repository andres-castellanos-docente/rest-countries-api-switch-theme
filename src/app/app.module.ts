import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { CountriesComponent } from './components/countries/countries.component';
import {HttpClientModule} from '@angular/common/http';
import { PaginationComponent } from './components/pagination/pagination.component';
import { DetailCountryComponent } from './components/countries/detail-country/detail-country.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BordersComponent } from './components/countries/borders/borders.component';
import { LoadingComponent } from './components/loading/loading.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FilterBarComponent,
    CountriesComponent,
    PaginationComponent,
    DetailCountryComponent,
    NotFoundComponent,
    BordersComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
