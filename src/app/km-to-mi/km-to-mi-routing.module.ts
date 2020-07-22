import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KmToMiPage } from './km-to-mi.page';

const routes: Routes = [
  {
    path: '',
    component: KmToMiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KmToMiPageRoutingModule {}
