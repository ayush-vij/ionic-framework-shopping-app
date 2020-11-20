import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewreqPage } from './newreq.page';

const routes: Routes = [
  {
    path: '',
    component: NewreqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewreqPageRoutingModule {}
