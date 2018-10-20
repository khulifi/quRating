import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from '../about/about'
import {CollagePage} from '../collage/collage'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {


section= [{
  title: "الكليات العلمية",
  collages:[{name:" حاسب"},{name:" هندسة"},{name:" ادارة"}],
  id:2
},{
  title: "الشرعية",
  collages:[{name:" قانون"},{name:" دراسات"},{name:" شريعة"}],
  id:1
},{
  title: "الصحية",
  collages:[{name:" أسنان"},{name:" بشري"},{name:" صيدلة"}],
  id:3
}]
  constructor(public navCtrl: NavController) {
  }


  goto(collagew, dddd){
    this.navCtrl.push(CollagePage,{
      'collage': collagew
    })
  }

getItems($event){

}
}
