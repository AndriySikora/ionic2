import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import  { TeamHomePage } from '../pages';


@Component({
    selector: 'page-teams',
    templateUrl: 'teams.page.html'
})
export class TeamsPage {

    teams = [
        { id: 1, name: 'HC Elite'},
        { id: 2, name: 'Hangout'},
        { id: 3, name: 'DC Shoes'},
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    itemTapped($event, team) {
        this.navCtrl.push(TeamHomePage, team);
    }

}
