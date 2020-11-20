import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyreqPage } from './myreq.page';

const routes: Routes = [
  {
    path: '',
    component: MyreqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyreqPageRoutingModule {}
