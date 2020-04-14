import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { HeaderComponent } from './shared/header/header.component';
import { CardFormComponent } from './components/card-form/card-form.component';
import { CardComponent } from './components/card-form/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    HeaderComponent,
    CardFormComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
