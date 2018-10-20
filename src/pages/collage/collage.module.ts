import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollagePage } from './collage';

@NgModule({
  declarations: [
    CollagePage,
  ],
  imports: [
    IonicPageModule.forChild(CollagePage),
  ],
})
export class CollagePageModule {}
