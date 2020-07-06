import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-_websiteintro',
  templateUrl: './_websiteintro.component.html',
  styleUrls: ['./_websiteintro.component.css']
})
export class _WebsiteintroComponent implements OnInit {
  // Local Variables to make the content Dynamic based on WebsiteID
  BannerWebsiteTitle: string;
  BannerWebsiteTagLine: string;
  CompanyName: string;

  // Injective Common Service into Constructor to Use Global Variables.
  constructor(private commonService: CommonService) { }

  /* Using common data from a Common Service for each website based on Website ID */
  ngOnInit(): void {
    this.BannerWebsiteTitle = "Doors Seattle";
    this.BannerWebsiteTagLine = "Quality Residential and Commercial Doors for Seattle";
    this.CompanyName = this.commonService.CompanyName;
  }

}
