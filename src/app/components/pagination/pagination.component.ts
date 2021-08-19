import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() darkMode: boolean;
  @Output() changeCurrent: EventEmitter<any>;
  @Input() currentPage: number;
  @Input() totalPages: number;
  constructor() {
    this.changeCurrent = new EventEmitter();
  }

  ngOnInit(): void {
  }

  nextPage(): void{
    this.currentPage++;
    this.updatesPage();
  }

  previousPage(): void{
    this.currentPage--;
    this.updatesPage();
  }

  changePage(Event: any): void{
    this.currentPage = Number(Event.target.innerText.trim());
    this.updatesPage();
  }

  updatesPage(): any{
    this.changeCurrent.emit(this.currentPage);
  }

}
