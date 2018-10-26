import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddDoctorPage } from '../add-doctor/add-doctor';

/**
 * Generated class for the RatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html',
})
export class RatePage {

  doctor;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.doctor = this.navParams.get('doctor')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatePage');
  }
  gotoAddDoctor(){
    this.navCtrl.push(AddDoctorPage,{
     
    })
    
    }
}
