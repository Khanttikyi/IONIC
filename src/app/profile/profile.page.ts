import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import * as $ from 'jquery';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any;
  password : any;
  constructor(public loadingController: LoadingController,private fireauth: AngularFireAuth,private router: Router,private navCtrl: NavController){}
  ionViewDidEnter() {
    this.fireauth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        console.log(this.user);
      }
    })
  }

logout() {
  (<any>window)
    .AccountKitPlugin
    .logout()
  
  this.router.navigate(['login']);
  this.navCtrl.navigateRoot('/login');
}
async presentLoading() {
  const loading = await this.loadingController.create({
    message: 'Loading',
    duration: 800
  });
  await loading.present();

  const { role, data } = await loading.onDidDismiss();

  console.log('Loading dismissed!');
}


  ngOnInit() {

    if(localStorage.getItem("check")=="myanmar"){
      (<HTMLInputElement>document.getElementById('radiomyan')).checked = true;
    }else{
      (<HTMLInputElement>document.getElementById('radioeng')).checked = true;
    }

    $("#myanmar").click(function(){
      localStorage.setItem("langauge", "myanmar");
      localStorage.setItem("check", "myanmar");
      (<HTMLInputElement>document.getElementById('profile')).innerHTML = "ပရိုဖိုင္";
      (<HTMLInputElement>document.getElementById('change_pass')).innerHTML = "စကား၀ွက္ေျပာင္းရန္";
      (<HTMLInputElement>document.getElementById('logout')).innerHTML = "အေကာင့္မွထြက္ရန္";
      (<HTMLInputElement>document.getElementById('pay')).innerHTML = "ေပးေခ်ရန္";
      (<HTMLInputElement>document.getElementById('promotion')).innerHTML = "ပရိုမိုးရွင္း";
      (<HTMLInputElement>document.getElementById('history')).innerHTML = "မွတ္တမ္းမ်ား";
      (<HTMLInputElement>document.getElementById('cardno')).innerHTML = "ကတ္နံပါတ္";
      (<HTMLInputElement>document.getElementById('pointqr')).innerHTML = "ပိြုင္႔အေရအတြက္";
      });

      $("#english").click(function(){
        localStorage.setItem("check", "eng");
        localStorage.setItem("langauge", "english");
        (<HTMLInputElement>document.getElementById('profile')).innerHTML = "Profile";
        (<HTMLInputElement>document.getElementById('change_pass')).innerHTML = "Change Password";
        (<HTMLInputElement>document.getElementById('logout')).innerHTML = "Log Out";
        (<HTMLInputElement>document.getElementById('pay')).innerHTML = "$ Pay";
        (<HTMLInputElement>document.getElementById('promotion')).innerHTML = "Promotion";
        (<HTMLInputElement>document.getElementById('history')).innerHTML = "History";
        (<HTMLInputElement>document.getElementById('cardno')).innerHTML = "Card Number";
        (<HTMLInputElement>document.getElementById('pointqr')).innerHTML = "Points";
        });

        if(localStorage.getItem("langauge")=="myanmar"){
          (<HTMLInputElement>document.getElementById('profile')).innerHTML = "ပရိုဖိုင္";
          (<HTMLInputElement>document.getElementById('change_pass')).innerHTML = "စကား၀ွက္ေျပာင္းရန္";
          (<HTMLInputElement>document.getElementById('logout')).innerHTML = "အေကာင့္မွထြက္ရန္";

        }

        this.presentLoading();
  }

 


}

