import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { AppRoutingModule } from './app-routing.module';
import { PublicComponent } from './public/public.component';
import { MerchItemComponent } from './merch-item/merch-item.component';
import { HttpClientModule } from '@angular/common/http';
import { MerchAdminComponent } from './merchandise/admin/merch-admin/merch-admin.component';
import { MerchEditorComponent } from './merchandise/admin/merch-editor/merch-editor.component';
import { MerchAddComponent } from './merchandise/admin/merch-add/merch-add.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    MerchandiseComponent,
    PublicComponent,
    MerchItemComponent,
    MerchAdminComponent,
    MerchEditorComponent,
    MerchAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
