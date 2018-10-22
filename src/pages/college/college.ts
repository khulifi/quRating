import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DoctorPage} from '../doctor/doctor'

/**
 * Generated class for the CollegePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-college',
  templateUrl: 'college.html',
})
export class CollegePage {
college;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.college = this.navParams.get('college');
    console.log(this.college )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollegePage');
  }
goto(page){
console.log(page.name)
this.navCtrl.push(DoctorPage,{
  'college': page,
  'asim': "4343"
})

}}
