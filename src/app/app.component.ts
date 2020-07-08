import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from './_services/common.service';
import { WEBSITES } from 'src/environments/environment';
import { HomeService } from './_services/home.service';
import { WebsiteInfo } from './_models/websiteInfo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  subscription: Subscription
  // Injective Common Service into Constructor to Use Global Variables.
  constructor(public commonService: CommonService, private homeService: HomeService) {
  }

  /* Using common data from a Common Service for each website based on Website ID */
  ngOnInit(): void {
    if (this.commonService.WebsiteInfo == undefined || this.commonService.WebsiteInfo.WebsiteID == undefined) {
      this.commonService.WebsiteInfo = new WebsiteInfo();
      this.GetWebsiteDetails();
    }
  }

  /* Get Website Details from Database based on Website ID */
  GetWebsiteDetails() {
    this.subscription = this.homeService.getWebsiteDetailsByID(this.commonService.CurrentWebsiteID)
      .subscribe(
        (data) => {
          // Sett the Website Details into CommonService Variable to Access globally.
          this.commonService.WebsiteInfo = data[0];
        },
        (err) => { console.log(err); },
        () => { }
      );
  }

  // UnSubscribe Service to avoid Memory Leaking
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }  
}