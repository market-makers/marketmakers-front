import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

declare var Chart: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productsBestsellers: any[];
  productsMissing: any[];
  categoriesBestsellers: any[];

  constructor(private productsService: ProductsService) { 
  }

  ngOnInit() {
      this.productsService.list().subscribe((response: any) => {
        this.productsBestsellers = response;
      });
      this.productsService.category().subscribe((response: any) => {
        this.categoriesBestsellers = response;
        this.graph();
      });
      this.productsService.missing().subscribe((response: any) => {
        this.productsMissing = response;
      });
  }

  graph() {
    let labels: string[] = this.categoriesBestsellers.map((cat) => cat.name);
    let values: string[] = this.categoriesBestsellers.map((cat) => cat.amount);
    
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Quantidade vendida',
                data: values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
  }

}
