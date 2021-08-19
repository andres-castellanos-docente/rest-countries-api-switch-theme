import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {bajarAnimationMenu, IzADerAnimation} from '../../animations/listanim.animations';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
  animations: [IzADerAnimation]
})
export class FilterBarComponent implements OnInit {
  @Input() darkMode: boolean;
  @Input() todosCountries: any;
  @Output() filterChange: EventEmitter<any>;
  dropDownFilterStatus: boolean;
  filteredRegion: boolean;
  textRegion: string;
  defTextRegion = 'Filter by Region';
  nameCountryFind: string;

  constructor() {
    this.filterChange = new EventEmitter();
    this.dropDownFilterStatus = false;
    this.filteredRegion = false;
    this.textRegion = this.defTextRegion;
  }

  ngOnInit(): void {

  }

  updateFilteredCountries(event): void {
    this.nameCountryFind = event.currentTarget.value.toLowerCase();
    this.filterChange.emit(this.filtrar());
  }

  filtrar(): Array<any> {

    let filteredCountries = this.todosCountries;
    if (this.nameCountryFind) {
      filteredCountries = filteredCountries.filter(country => {
        return country.name.toLowerCase().includes(this.nameCountryFind.toLowerCase());
      });
    }
    if (this.filteredRegion) {
      filteredCountries = filteredCountries.filter(country => {
        return country.region.toLowerCase() === this.textRegion.toLowerCase();
      });
    }
    return filteredCountries;
  }

  updateRegionCountries(event): void {
    this.textRegion = event.target.innerText;
    this.filteredRegion = true;
    this.dropDownFilterStatus = false;
    this.filterChange.emit(this.filtrar());
  }

  delRegion(): void {
    this.filteredRegion = false;
    this.textRegion = this.defTextRegion;
    this.loadAll();
  }

  loadAll(): void {
    const filteredCountries = this.todosCountries;
    this.filterChange.emit(filteredCountries);
  }


}
