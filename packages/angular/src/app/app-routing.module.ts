import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AddressFormTestComponent } from './address-form-test/address-form-test.component';
import { NavigationTestComponent } from './navigation-test/navigation-test.component';

const routes: Routes = [
  { path: 'form', component: AddressFormTestComponent },
  { path: 'navigation', component: NavigationTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
