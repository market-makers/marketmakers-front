import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';
import { PromotionsService } from '../promotions.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {

  submited: boolean = false;
  
  promotionForm = new FormGroup({
    type: new FormControl('DESCONTO'),
    title: new FormControl(''),
    description: new FormControl(''),
    value: new FormControl(''),
    coupons: new FormControl(''),
    dots: new FormControl('')
  });

  constructor(private _promotionsService: PromotionsService) { }

  ngOnInit() {
  }

  onSubmit() {
    this._promotionsService.create(this.promotionForm.value).subscribe(
      (response) => {
        this.submited = true;
      }, (error) => {
        alert('Erro ao enviar formulário');
        console.log(error);
      });
  }

}
