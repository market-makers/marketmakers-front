import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CompanyService } from '../company.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  submited: boolean = false;

  companyForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    companyName: new FormControl(''),
    cnpj: new FormControl(''),
    street: new FormControl(''),
    complement: new FormControl(''),
    neighborhood: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipCode: new FormControl(''),
    categories: new FormControl('bebidas,laticinios,hortifruti'),
    type: new FormControl('supermercado')
  });

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  

  constructor(private companyService: CompanyService, private _router: Router) { }

  ngOnInit() {
    console.log(this.companyService.getCompany());
    if(this.companyService.getCompany()) {
      this._router.navigate(['/dashboard']);
    }
  }

  onLogin() {
    this.companyService.login(this.loginForm.value).subscribe((response) => {
      this.companyService.setCompany(response);
      window.dispatchEvent(new Event('loggedIn'));
      this._router.navigate(['/dashboard']);
    }, (error) => {
      alert('Erro ao logar.');
    })
  }

  onSubmit() {
    let values: any = this.companyForm.value;
    values.address = {
      street: values.street,
      complement: values.complement,
      neighborhood: values.neighborhood,
      city: values.city,
      state: values.state,
      zipCode: values.zipCode
    }

    this.companyService.create(values).subscribe(
      (response) => {
        this.submited = true;
        this.companyService.setCompany(response);
        window.dispatchEvent(new Event('loggedIn'));
        this._router.navigate(['/dashboard']);
      }, (error) => {
        alert('Erro ao enviar formulário');
        console.log(error);
      });
  }

}
