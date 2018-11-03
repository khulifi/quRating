import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddDoctorPage } from '../add-doctor/add-doctor';
import { Storage } from '@ionic/storage';
import { wComment } from '../../app/models/Comment';



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
  doctorName;
  commentsArray:wComment[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage) {    
    this.doctorName = this.navParams.get('doctor')
    storage.get(this.doctorName).then((val) => {
      console.log(val);
      
      this.commentsArray=val;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatePage');
  }
  gotoAddDoctor(dname){
    this.navCtrl.push(AddDoctorPage,{
      'doctors': [this.doctorName],

    })
    
    }
}
