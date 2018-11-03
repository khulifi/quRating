import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { wComment } from '../../app/models/Comment';

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
  doctors:string[] = [];
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





  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.doctors = this.navParams.get('doctors');
    this.doctorName = this.doctors[0];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDoctorPage');
  }
  saveData() {
  
    let comment: wComment = new wComment(this.dealing, this.dealingText, this.behavior, this.behaviorText, this.exams, this.examsText, this.attendance, this.attendanceText)

    let commentsArr: wComment[];
    this.storage.get(this.doctorName).then((arrData) => {
      commentsArr = arrData;
    }).then(() => {

      if (commentsArr) {
        commentsArr.push(comment);
        this.storage.set(this.doctorName, commentsArr).then(() => {
          console.log("data saved: commentsArray");

        })
      } else {
        let newCommentArray: wComment[] = [];
        newCommentArray.push(comment);
        this.storage.set(this.doctorName, newCommentArray).then((da) => {
          console.log("data saved: commentsArray");
console.log(da);

        })
      }

    }).then(() =>{
      this.navCtrl.pop()
    })



  }

}
