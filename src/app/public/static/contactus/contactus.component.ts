import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  Cell: string;
  OfficePhone: string;
  Fax: string
  ContactEmail: string;

  /* Using Cell No. and Office Phone no. from a Common Service */
  constructor(private commonService: CommonService) {
    this.Cell = commonService.Cell;
    this.OfficePhone = commonService.OfficePhone;
    this.Fax = environment.Fax;
    this.ContactEmail = environment.ContactEmail;
  }

  ngOnInit(): void {
  }

}
