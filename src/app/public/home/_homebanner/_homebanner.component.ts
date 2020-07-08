import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';
import { HomeService } from '../../service/home.service';
import { environment, WEBSITES } from 'src/environments/environment';
import { WebsiteInfo } from '../models/WebsiteInfo';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-_homebanner',
  templateUrl: './_homebanner.component.html',
  styleUrls: ['./_homebanner.component.css']
})
export class _HomebannerComponent implements OnInit {

  // Injective Common Service into Constructor to Use Global Variables.
  constructor(public commonService: CommonService, private homeService: HomeService) {
  }

  /* Using common data from a Common Service for each website based on Website ID */
  ngOnInit(): void {
    this.GetWebsiteDetails();
  }

  /* Get Website Details from Database based on Website ID */
  GetWebsiteDetails() {
    this.homeService.getWebsiteDetailsByID(WEBSITES.DoorSeattle)
      .subscribe(
        (data) => {
          this.SaveWebsiteInfo(data);
        },
        (err) => { console.log(err); },
        () => { }
      );
  }

  SaveWebsiteInfo(data: any) {
    if(data!=undefined)
    {
      this.commonService.WebsiteInfo = new WebsiteInfo();
      this.commonService.WebsiteInfo.CompanyName = data[0].companyName;
      this.commonService.WebsiteInfo.BannerWebsiteTitle = data[0].name;
      this.commonService.WebsiteInfo.BannerWebsiteTagLine = data[0].websiteBannerTagLine;
      this.commonService.WebsiteInfo.CompanyDesc = data[0].companyDesc;
    }
  }
}