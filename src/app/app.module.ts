import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { HeaderComponent } from './shared/header/header.component';
import { CardFormComponent } from './components/card-form/card-form.component';
import { CardComponent } from './components/card-form/card/card.component';
import { StepsComponent } from './shared/steps/steps.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    HeaderComponent,
    CardFormComponent,
    CardComponent,
    StepsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
