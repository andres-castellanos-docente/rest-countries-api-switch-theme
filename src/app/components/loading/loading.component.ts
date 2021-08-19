import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input() darkMode: boolean;
  srcimg: string;

  constructor() {
  }

  ngOnInit(): void {
    this.srcimg = this.darkMode ? 'dark.svg' : 'light.svg';
  }

}
