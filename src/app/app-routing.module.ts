import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BeginPageComponent} from './pages/begin-page/begin-page.component';
import {WhoWeArePageComponent} from './who-we-are-page/who-we-are-page.component';
import {CrowdfundingPageComponent} from './crowdfunding-page/crowdfunding-page.component';
import {CientivaPageComponent} from './cientiva-page/cientiva-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {ProjectPageComponent} from './pages/project-page/project-page.component';
import {PaymentComponent} from './pages/payment/payment.component';

const routes: Routes = [
  {path: 'inicio', component: BeginPageComponent},
  {path: 'quemsomos', component: WhoWeArePageComponent},
  {path: 'financiamento-coletivo', component: CrowdfundingPageComponent},
  {path: 'cientiva', component: CientivaPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'project', component: ProjectPageComponent},
  {path: 'payment', component: PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
