import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WebsiteInfo } from '../_models/websiteInfo';


@Injectable({
  providedIn: 'root'
})

/* Loading Home Page Content based on Website ID */
export class HomeService {

  websiteInfo: WebsiteInfo;

  // Constructor to Inject HttpClient Service
  constructor(private httpClient: HttpClient) {
  }

  //Get Website Details from Database based on given Website ID
  getWebsiteDetailsByID(WebsiteID: number): Observable<WebsiteInfo> {
    return this.httpClient.get<WebsiteInfo>(`${environment.WEBAPIURL}home/${WebsiteID}`);
  }
}