import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DoctorPage} from '../doctor/doctor'

/**
 * Generated class for the CollagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collage',
  templateUrl: 'collage.html',
})
export class CollagePage {
collage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.collage = this.navParams.get('collage');
    console.log(this.collage )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollagePage');
  }
goto(page){
console.log(page.name)
this.navCtrl.push(DoctorPage,{
  'collage': page,
  'asim': "4343"
})

}}
