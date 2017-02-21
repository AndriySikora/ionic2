import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { MyTeamsPage } from '../pages/pages';
import { TournamentsPage } from '../pages/pages';
import { TeamsPage } from '../pages/pages';
import { TeamDetailPage } from '../pages/pages';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '99a79f4f'
  }
};

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
