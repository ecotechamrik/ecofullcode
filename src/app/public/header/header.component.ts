import { Component, OnInit } from '@angular/core';
import { WEBSITES, environment } from './../../../environments/environment'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // CurrentWebsite = WEBSITES[WEBSITES.DoorSeattle]; -- REQUIRED LATER
  Cell = environment.Cell;
  OfficePhone = environment.OfficePhone;
  CurrentDate = new Date();

  constructor() { }

  ngOnInit(): void {
    
  }

}
