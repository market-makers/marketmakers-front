import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PromotionsComponent } from './promotions/promotions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'promotions', component: PromotionsComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}