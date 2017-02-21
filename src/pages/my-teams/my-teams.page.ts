import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TournamentsPage } from '../pages';

@Component({
    templateUrl: 'my-teams.page.html'
})

export class MyTeamsPage {
    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    goToTournaments() {
        this.navCtrl.push(TournamentsPage);
    }
}
