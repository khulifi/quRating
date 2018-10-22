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
section;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.section = this.navParams.get('section');
    console.log(this.section )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollegePage');
  }
gotoDoctor(collegeRef){
this.navCtrl.push(DoctorPage,{
  'college': collegeRef,
})

}}
