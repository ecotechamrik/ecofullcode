import { Component, OnInit } from '@angular/core';
import { WEBSITES, environment } from '../../../environments/environment'

@Component({
  selector: 'app-_header',
  templateUrl: './_header.component.html',
  styleUrls: ['./_header.component.css']
})
export class _HeaderComponent implements OnInit {
  // CurrentWebsite = WEBSITES[WEBSITES.DoorSeattle]; -- REQUIRED LATER
  Cell = environment.Cell;
  OfficePhone = environment.OfficePhone;
  CurrentDate = new Date();

  constructor() { }

  ngOnInit(): void {
    
  }

}
