import { Component }  from '@angular/core'
import {
  NavController,
  NavParams,
}                     from 'ionic-angular'

import { Brolog }     from 'brolog'

import { AboutPage }  from '../about/'
import { HelpPage }   from '../help/'
import { LogoutPage } from '../logout/'

@Component({
  selector:     'page-setting',
  templateUrl:  'setting.html',
})
export class SettingPage {
  public notificate = true

  constructor(
    public log:       Brolog,
    public navCtrl:   NavController,
    public navParams: NavParams,
  ) {
    this.log.verbose('SettingPage', 'constructor()')
  }

  ionViewDidLoad() {
    this.log.verbose('SettingPage', 'ionViewDidLoad()')
  }

  about() {
    this.navCtrl.push(AboutPage)
  }

  help() {
    this.navCtrl.push(HelpPage)
  }

  gotoLogoutPage() {
    this.navCtrl.push(LogoutPage)
  }
}
