import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/* Loading Home Page Content based on Website ID */
export class HomeService {
  BannerID: number;
  BannerWebsiteTitle: string;
  BannerWebsiteTagLine: string;
  CompanyName: string;
  Desc: string;
  ContactEmailID: string;
  Cell: string;
  Phone: string;
  Fax: string;
  
}
