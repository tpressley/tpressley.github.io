import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { PublicComponent } from './public/public.component';
import { MerchAdminComponent } from './merchandise/admin/merch-admin/merch-admin.component';

const routes: Routes = [
  { path: 'merch', component: MerchandiseComponent },
  { path: '', component: PublicComponent },
  { path: 'merch/admin', component: MerchAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
