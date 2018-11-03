import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RatePage } from '../rate/rate';
import { AddDoctorPage } from '../add-doctor/add-doctor';


/**
 * Generated class for the DoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html',
})
export class DoctorPage {

college;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.college = this.navParams.get('college')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorPage');
  }
  gotoRate(DoctorRef){
    this.navCtrl.push(RatePage,{
      'doctor': DoctorRef,
    })
  }
    gotoAddDoctor(DoctorRef){
      this.navCtrl.push(AddDoctorPage,{
        'doctors': DoctorRef,

      })
      
      }
}
