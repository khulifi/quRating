import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AddDoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-doctor',
  templateUrl: 'add-doctor.html',
})
export class AddDoctorPage {
  doctorName;
  courseLabel;
  dealing;
  dealingText;
  behavior;
  behaviorText;
  exams;
  examsText;
  attendance;
  attendanceText;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDoctorPage');
  }
  saveData(){
    console.log('Data Saved');
    this.storage.set('dealingText',this.dealingText);
    this.storage.set('behaviorText',this.behaviorText);
    this.storage.set('examsText',this.examsText);
    this.storage.set('attendanceText',this.attendanceText);
  }

}
