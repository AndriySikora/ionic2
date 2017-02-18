import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'alert-confirm.html'
})

export class ConfirmPage {
    constructor(public alertCtrl: AlertController){ }

    doConfirm() {
        let confirm = this.alertCtrl.create({
            title: 'Use this lightsaber?',
            message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy',
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                },
            ]
        });
        confirm.present();
    }
}
