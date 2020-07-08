import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-_footer',
  templateUrl: './_footer.component.html',
  styleUrls: ['./_footer.component.css']
})
export class _FooterComponent implements OnInit {

  // Setting Local Variables
  Cell: string;
  OfficePhone: string;
  CurrentYear = new Date();
  WebsiteName: string;
  DevelopedBy: string;
  ContactEmail: string;
  

  // Injective Common Service into Constructor to Use Global Variables.
  constructor(private commonService: CommonService) { }

  // Setting Variables Values from the Common Service
  ngOnInit(): void {
    this.Cell = this.commonService.Cell;
    this.OfficePhone = this.commonService.OfficePhone; 
    this.WebsiteName = this.commonService.WebsiteName;
    this.DevelopedBy = this.commonService.DevelopedBy;
    this.ContactEmail = this.commonService.ContactEmail;
    this.commonService.TestDesc = "NEW TEST";

  }

}
