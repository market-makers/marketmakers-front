import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  company: any;

  constructor(private companyService: CompanyService) {

  }

  ngOnInit() {
    this.company = this.companyService.getCompany();
    window.addEventListener('loggedIn', () => {
      this.company = this.companyService.getCompany();
    })
  }

  logout() {
    this.companyService.logout();
  }

}
