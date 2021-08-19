import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountriesComponent} from './components/countries/countries.component';
import {DetailCountryComponent} from './components/countries/detail-country/detail-country.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: CountriesComponent},
  {path: 'countries/:country', component: DetailCountryComponent},
  { path: '**', component: NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
