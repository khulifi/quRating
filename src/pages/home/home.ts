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
  colleges:[{name:" حاسب"},{name:" هندسة"},{name:" ادارة"}],
  id:2
},{
  title: "الشرعية",
  colleges:[{name:" قانون"},{name:" دراسات"},{name:" شريعة"}],
  id:1
},{
  title: "الصحية",
  colleges:[{name:" أسنان"},{name:" بشري"},{name:" صيدلة"}],
  id:3
}]
  constructor(public navCtrl: NavController) {
  }


  goto(collegew, dddd){
    this.navCtrl.push(CollegePage,{
      'college': collegew
    })
  }

getItems($event){

}
}
