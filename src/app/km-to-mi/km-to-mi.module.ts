import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KmToMiPageRoutingModule } from './km-to-mi-routing.module';

import { KmToMiPage } from './km-to-mi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KmToMiPageRoutingModule
  ],
  declarations: [KmToMiPage]
})
export class KmToMiPageModule {}
