import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListImagesPage } from './list-images.page';

const routes: Routes = [
  {
    path: '',
    component: ListImagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListImagesPageRoutingModule {}
