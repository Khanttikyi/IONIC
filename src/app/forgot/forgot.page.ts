/***
Ionic 4 Firebase Email Auth
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit  {
  email: string = '';
  password: string = '';
  error: string = '';
  username: string = '';
  constructor(private fireauth: AngularFireAuth, private router: Router, private toastController: ToastController, public loadingController: LoadingController,
    public alertController: AlertController) {

  }

  ngOnInit() {
    if(localStorage.getItem("langauge")=="myanmar"){
      (<HTMLInputElement>document.getElementById('forgetpsws')).innerHTML = "သင္႔စကား၀ွက္ေမ႔ေနပာသလား ?";
      (<HTMLInputElement>document.getElementById('forgetquestion')).innerHTML = "စကား၀ွက္ေျပာင္းရန္သင္႔ရဲ႕ Gmail Account ကိုျဖည္႔ေပးပါ";
      (<HTMLInputElement>document.getElementById('recover')).innerHTML = "စကား၀ွက္ျပန္ယူရန္";
      (<HTMLInputElement>document.getElementById('donthaveacc')).innerHTML = "အေကာင္႔ရွိပာက ";
      (<HTMLInputElement>document.getElementById('loginhere')).innerHTML = " အေကာင္႕၀င္ရန္";
    }
  }

  async openLoader() {
    const loading = await this.loadingController.create({
      message: 'Please Wait ...',
      duration: 2000
    });
    await loading.present();
  }
  async closeLoading() {
    return await this.loadingController.dismiss();
  }

  recover() {
    this.fireauth.auth.sendPasswordResetEmail(this.email)
      .then(data => {
        console.log(data);
        this.presentToast('Password reset email sent', false, 'bottom', 1000);
        this.router.navigateByUrl('/login');
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });
  }

  async presentToast(message, show_button, position, duration) {
    const toast = await this.toastController.create({
      message: message,
      showCloseButton: show_button,
      position: position,
      duration: duration
    });
    toast.present();
  }

}
