import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListImagesPageRoutingModule } from './list-images-routing.module';

import { ListImagesPage } from './list-images.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListImagesPageRoutingModule
  ],
  declarations: [ListImagesPage]
})
export class ListImagesPageModule {}
