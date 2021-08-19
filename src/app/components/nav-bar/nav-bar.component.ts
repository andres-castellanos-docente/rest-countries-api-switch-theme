import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() darkMode: boolean;
  @Output() isDarkChange: EventEmitter<boolean>;

  constructor() {
    this.isDarkChange = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.darkMode = !this.darkMode;
    localStorage.setItem('dark', this.darkMode.toString());
    this.isDarkChange.emit(this.darkMode);
  }

}
