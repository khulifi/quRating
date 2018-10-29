import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddDoctorPage } from '../add-doctor/add-doctor';
import { Storage } from '@ionic/storage';


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
  dealingText;
  behaviorText;
  examsText;
  attendanceText
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage) {
    this.doctor = this.navParams.get('doctor')
    
    storage.get('dealingText').then((val) => {
      this.dealingText=val;
    });

    storage.get('behaviorText').then((val) => {
      this.behaviorText=val;
    });

    storage.get('examsText').then((val) => {
      this.examsText=val;
    });

    storage.get('attendanceText').then((val) => {
      this.attendanceText=val;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatePage');
  }
  gotoAddDoctor(){
    this.navCtrl.push(AddDoctorPage,{
     
    })
    
    }
}
