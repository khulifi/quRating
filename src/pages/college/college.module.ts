import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollegePage } from './college';

@NgModule({
  declarations: [
    CollegePage,
  ],
  imports: [
    IonicPageModule.forChild(CollegePage),
  ],
})
export class CollegePageModule {}
