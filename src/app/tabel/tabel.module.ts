import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TabelPageRoutingModule } from './tabel-routing.module';

import { TabelPage } from './tabel.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TabelPageRoutingModule],
  declarations: [TabelPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabelPageModule {}
