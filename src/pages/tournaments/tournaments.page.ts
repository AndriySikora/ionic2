import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import  { MyTeamsPage, TeamsPage } from '../pages';


@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.page.html'
})
export class TournamentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  itemTapped() {
    this.navCtrl.push(TeamsPage);
  }

}
