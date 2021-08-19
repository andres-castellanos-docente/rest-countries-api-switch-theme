import {Component,  OnInit} from '@angular/core';
import {CountriesService} from '../../../services/countries.service';
import {ActivatedRoute} from '@angular/router';
import { subirAnimation, IzADerAnimation} from '../../../animations/listanim.animations';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.scss'],
  animations: [subirAnimation, IzADerAnimation]
})
export class DetailCountryComponent implements OnInit {
  darkMode: boolean;
  dataPais: any;
  todosCountries: any;
  buttonBorders: any;
  loading: boolean;

  constructor(private countriesService: CountriesService, private route: ActivatedRoute) {
    const darkStorage = localStorage.getItem('dark');
    this.darkMode = darkStorage !== null ? JSON.parse(darkStorage) : false;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loading = true;
      this.loadPaises();
      this.loadPais(params.country);
    });
  }

  async loadPaises(): Promise<void> {
    const locStorage = sessionStorage.getItem('data');
    this.todosCountries = locStorage == null ? await this.countriesService.listCountries() : JSON.parse(locStorage);
  }

  async loadPais(pais: string): Promise<void> {
    const arrayPais = await this.countriesService.listCountriesByName(pais);
    this.dataPais = arrayPais[0];
    this.buttonBorders = [];
    for (let border of this.dataPais.borders) {
      const borderCountrie = this.todosCountries.filter(country => {
        return country.alpha3Code.includes(border);
      });
      this.buttonBorders.push(borderCountrie[0].name);
    }
    this.buttonBorders = this.buttonBorders.sort();
    const self = this;
    setTimeout(() => {
      self.loading = false;
    }, 250);
  }
}
