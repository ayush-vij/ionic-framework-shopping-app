import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewreqPageRoutingModule } from './newreq-routing.module';

import { NewreqPage } from './newreq.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NewreqPageRoutingModule
  ],
  declarations: [NewreqPage]
})
export class NewreqPageModule {}
