import { Injectable } from '@angular/core';
import { WEBSITES, environment } from '../../environments/environment'
import { WebsiteInfo } from '../_models/websiteInfo';

@Injectable({
  providedIn: 'root'
})

/* Common Services for GLobal Variables used in the Website */
 export class CommonService {

  /* Setting the Global Variables which will be commonly used in the website */
  CurrentWebsite = environment.CurrentWebsite;
  CurrentWebsiteID = environment.CurrentWebsiteID;
  WebsiteInfo: WebsiteInfo;
}
