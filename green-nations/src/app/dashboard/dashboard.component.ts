import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee.models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  languages = ['English', 'Spanish', 'Other'];
  model = new Employee('Darla', 'Smith', true, 'w2', 'English' );
  constructor() { }

  ngOnInit() {
  }

}
