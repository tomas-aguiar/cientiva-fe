import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabNav, MatTabsModule} from '@angular/material/tabs';
import { BeginPageComponent } from './pages/begin-page/begin-page.component';
import { WhoWeArePageComponent } from './who-we-are-page/who-we-are-page.component';
import { CrowdfundingPageComponent } from './crowdfunding-page/crowdfunding-page.component';
import { CientivaPageComponent } from './cientiva-page/cientiva-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import { HowItWorksComponent } from './pages/begin-page/how-it-works/how-it-works.component';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {FlexModule} from '@angular/flex-layout';
import { ProjectCardComponent } from './pages/begin-page/project-card/project-card.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { PaymentComponent } from './pages/payment/payment.component';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ThankYouModalComponent } from './pages/payment/thank-you-modal/thank-you-modal.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BeginPageComponent,
    WhoWeArePageComponent,
    CrowdfundingPageComponent,
    CientivaPageComponent,
    LoginPageComponent,
    HowItWorksComponent,
    ProjectCardComponent,
    FooterComponent,
    ProjectPageComponent,
    PaymentComponent,
    ThankYouModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatCarouselModule,
    MatIconModule,
    NgbModule,
    MatProgressBarModule,
    FlexModule,
    MatInputModule,
    MatRadioModule,
    MatListModule,
    FormsModule,
    MatExpansionModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [MatTabNav],
  bootstrap: [AppComponent]
})
export class AppModule { }
