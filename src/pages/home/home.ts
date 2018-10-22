import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from '../about/about'
import {CollegePage} from '../college/college'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {


section= [{
  title: "الكليات العلمية",
  colleges:
  [
    {collegeName:" حاسب",Doctor:["أحمد","ثابت"]},
    {collegeName:" هندسة",Doctor:["أحمد","ثابت"]},
    {collegeName:" ادارة",Doctor:["أحمد","ثابت"]}
  ],
  id:2
},{
  title: "الشرعية",
  colleges:
  [
    {collegeName:" قانون",Doctor:["أحمد","ثابت"]},
    {collegeName:" دراسات",Doctor:["أحمد","ثابت"]},
    {collegeName:" شريعة",Doctor:["أحمد","ثابت"]}
  ],
  id:1
},{
  title: "الصحية",
  colleges:
  [
    {collegeName:" أسنان",Doctor:["أحمد","ثابت"]},
    {collegeName:" بشري",Doctor:["أحمد","ثابت"]},
    {collegeName:" صيدلة",Doctor:["أحمد","ثابت"]}
  ],
  id:3
}]
  constructor(public navCtrl: NavController) {
  }


  gotoCollege(sectionRef){
    this.navCtrl.push(CollegePage,{
      'section': sectionRef
    })
  }

getItems($event){

}
}
