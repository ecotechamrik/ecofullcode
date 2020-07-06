import { Injectable } from '@angular/core';
import { WEBSITES, environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

/* Common Services for GLobal Variables used in the Website */
export class CommonService {

  /* Setting the Global Variables which will be commonly used in the website */
  Cell = environment.Cell;
  OfficePhone = environment.OfficePhone;
  Fax = environment.Fax;
  ContactEmail = environment.ContactEmail;
  WebsiteName = environment.WebsiteName;
  DevelopedBy = environment.DevelopedBy;
  CompanyName = environment.CompanyName;
  WebsiteID = WEBSITES[WEBSITES.DoorSeattle]; // To fetch Website Details based on Website ID or Enum Type
}
