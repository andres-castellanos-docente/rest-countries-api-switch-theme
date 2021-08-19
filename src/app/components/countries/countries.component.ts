import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {
  bajarAnimation,
  bajarAnimationMenu,
  derAIzAnimation, IzADerAnimation,
  subirAnimation,
  subirAnimationMenu
} from '../../animations/listanim.animations';

@Component({
  selector: 'app-princi',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
  animations: [bajarAnimationMenu,  derAIzAnimation]
})
export class CountriesComponent implements OnInit {
  @ViewChild('topSearch') topSearch: ElementRef;
  darkMode: boolean;
  todosCountries: any;
  pagedCountries: any;
  filteredCountries: any;
  regionFilter: string;
  currentPage: number;
  totalPages: number;
  loading: boolean;

  constructor(private countriesService: CountriesService) {
    const darkStorage = localStorage.getItem('dark');
    this.darkMode = darkStorage !== null ? JSON.parse(darkStorage) : false;
    this.regionFilter = null;
  }

  ngOnInit(): void {
    this.loading = true;
    this.loadPaises();
  }

  async loadPaises(): Promise<void> {
    const locStorage = sessionStorage.getItem('data');
    this.todosCountries = locStorage == null ? await this.countriesService.listCountries() : JSON.parse(locStorage);
    this.filteredCountries = this.todosCountries;
    this.actualizaTot();
    this.currentPage = 1;
    this.filtrarPaginacion();
    const self = this;
    setTimeout(() => {
      self.loading = false;
    }, 250);

  }

  filtrarPaginacion(): void {
    this.pagedCountries = this.filteredCountries
      .slice((this.currentPage - 1) * 8, (this.currentPage - 1) * 8 + 8);
    if (this.topSearch) {
      this.topSearch.nativeElement.scrollIntoView({behavior: 'smooth'});
    }
    const self = this;
    setTimeout(() => {
      self.loading = false;
    }, 250);
  }

  filtered(event: any): void {
    this.loading = true;
    this.filteredCountries = event;
    this.currentPage = 1;
    this.actualizaTot();
    this.filtrarPaginacion();
  }

  actualizaTot(): void {
    this.totalPages = this.filteredCountries.length > 8 ? Math.ceil(this.filteredCountries.length / 8) : 1;
  }

  changeCurrent(event): void {
    this.loading = true;
    this.currentPage = event;
    this.filtrarPaginacion();
  }
}
