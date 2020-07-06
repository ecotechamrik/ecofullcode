import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-_header',
  templateUrl: './_header.component.html',
  styleUrls: ['./_header.component.css']
})
export class _HeaderComponent implements OnInit {
  
  // Setting Local Variables
  Cell: string;
  OfficePhone: string;
  CurrentDate = new Date();

  // Injective Common Service into Constructor to Use Global Variables.
  constructor(private commonService:CommonService) { 
    
  }

  /* Using Cell No. and Office Phone no. from a Common Service */
  ngOnInit(): void {
    this.Cell = this.commonService.Cell;
    this.OfficePhone = this.commonService.OfficePhone; 
  }

}
