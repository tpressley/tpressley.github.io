import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { AppRoutingModule } from './app-routing.module';
import { PublicComponent } from './public/public.component';
import { MerchItemComponent } from './merch-item/merch-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MerchandiseComponent,
    PublicComponent,
    MerchItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
