import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';

export interface PeriodicElement {
  position: number;
  name: string;
  // weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 101011, name: 'George Max', symbol: 'H'},
  {position: 202202, name: 'Zee Carol',  symbol: 'He'},
  {position: 303030, name: 'Ravi Ken', symbol: 'Li'},
  {position: 440044, name: 'Mary Louis', symbol: 'Be'},
  {position: 505050, name: 'Harry Rock', symbol: 'B'}
];

@Component({
  selector: 'app-submission-table',
  templateUrl: './submission-table.component.html',
  styleUrls: ['./submission-table.component.css'],
  standalone: true,
  imports: [MatTableModule,RouterModule],
})
export class SubmissionTableComponent {
  displayedColumns: string[] = ['position', 'name', 'symbol'];
  dataSource = ELEMENT_DATA;
}
