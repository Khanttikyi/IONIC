/**
* Ionic 4 Firebase Email Auth
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
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{
  email: string = '';
  password: string = '';
  error: string = '';
  constructor(private fireauth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private navCtrl: NavController,
    ) {
  }

  ngOnInit() {


    if(localStorage.getItem("langauge")=="myanmar"){
      
      //  (<HTMLInputElement>document.getElementById('email')).placeholder = "အီးေမးလ္";
      //  (<HTMLInputElement>document.getElementById('password')).placeholder = "လွိ်ဳ့၀ွက္နံပာတ္";
      (<HTMLInputElement>document.getElementById('login')).innerHTML = "အေကာင္႔၀င္ရန္";
      (<HTMLInputElement>document.getElementById('noacc')).innerHTML = "အေကာင္႔မရွိပာက ";
      (<HTMLInputElement>document.getElementById('signup')).innerHTML = " အေကာင္႔သစ္ဖြင္႔ရန္";
      (<HTMLInputElement>document.getElementById('forgetpsw')).innerHTML = " အေကာင္႔ေမ႔ေနပါတယ္";
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

  login() {
    this.fireauth.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(res => {
        if (res.user) {
          console.log(res.user);
          this.presentLoading();
          this.navCtrl.navigateRoot('/home');
        }

        
      })
      .catch(err => {
        console.log(`login failed ${err}`);
        this.error = err.message;
      });
  }




  

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading',
      duration: 3000
    });
    await loading.present();
    
   
    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  
  }
  

  logout() {
    (<any>window)
      .AccountKitPlugin
      .logout()
    
  }

}
