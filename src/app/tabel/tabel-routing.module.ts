import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabelPage } from './tabel.page';

const routes: Routes = [
  {
    path: '',
    component: TabelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabelPageRoutingModule {}
