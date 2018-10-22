import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    // console.log(this.navParams.get('asim'))

    this.navCtrl.pop().then(()=>{

    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorPage');
  }

}
