import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-_header',
  templateUrl: './_header.component.html',
  styleUrls: ['./_header.component.css']
})
export class _HeaderComponent implements OnInit {
  Cell: string;
  OfficePhone: string;
  CurrentDate = new Date();

  /* Using Cell No. and Office Phone no. from a Common Service */
  constructor(private commonService:CommonService) { 
    this.Cell = commonService.Cell;
    this.OfficePhone = commonService.OfficePhone;
  }

  ngOnInit(): void {
    
  }

}
