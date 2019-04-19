import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './containers/landing/landing.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { StorageComponent } from './components/storage/storage.component';


@NgModule({
  declarations : [
    LandingComponent,
    HeaderComponent,
    AsideComponent,
    StorageComponent
  ],
  imports : [
    CommonModule
  ],
  exports : [
    LandingComponent
  ],
  providers: [
  ]
})

export class HotelModule{}
