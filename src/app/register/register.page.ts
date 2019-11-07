import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router:Router,private navCtrl: NavController,public alertController: AlertController,public loadingController: LoadingController) { }

  ngOnInit() {
    if(localStorage.getItem("langauge")=="myanmar"){
      (<HTMLInputElement>document.getElementById('gender')).innerHTML = "က်ား/မ";
      (<HTMLInputElement>document.getElementById('male')).innerHTML = "က်ား";
      (<HTMLInputElement>document.getElementById('female')).innerHTML = "မ";
      (<HTMLInputElement>document.getElementById('dob')).innerHTML = "ေမြးသကၠရာဇ္";
      (<HTMLInputElement>document.getElementById('township')).innerHTML = "ေနရပ္လိပ္စာ";
      (<HTMLInputElement>document.getElementById('next')).innerHTML = "ဆက္သြားရန္";
    }
  }


  next(){
    this.presentLoading();
    

  this.router.navigateByUrl('/home');
  this.navCtrl.navigateRoot('/home');
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Techno Reward',
      message: 'Register Successful',
      buttons: ['OK']
    });
  }
    async presentAlertmyanmar() {
      const alert = await this.alertController.create({
        header: 'Techno Reward',
        message: 'အေကာင္႔ဖြင့္ျခင္းေအာင္ျမင္ပာသည္',
        buttons: ['အိုေက']
      });
   
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading',
      duration: 2000
    });
    await loading.present();
    
   
    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
    if(localStorage.getItem("langauge")=="myanmar"){
      this.presentAlertmyanmar();
    }else{
      this.presentAlert();
    }
  }

}
