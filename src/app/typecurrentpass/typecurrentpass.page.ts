import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-typecurrentpass',
  templateUrl: './typecurrentpass.page.html',
  styleUrls: ['./typecurrentpass.page.scss'],
})
export class TypecurrentpassPage implements OnInit {
  user: any;
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
      (<HTMLInputElement>document.getElementById('next')).innerHTML = "ဆက္သြားရန္";
      (<HTMLInputElement>document.getElementById('texttochange')).innerHTML = "စကား၀ွက္ေျပာင္းရန္အေကာင္႔ထပ္မံ၀င္ေရာက္ပါ";
    }
  }

  ionViewDidEnter() {
    this.fireauth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        console.log(this.user);
      }
    })
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
    var currentemail = (<HTMLInputElement>document.getElementById('currentemail')).innerHTML;
    if(this.email == currentemail){
    this.fireauth.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(res => {
        if (res.user) {
          console.log(res.user);
           
          this.router.navigateByUrl('/changepsw');
        }

        
      })
      .catch(err => {
        console.log(`login failed ${err}`);
        this.error = err.message;
      });
    }else{
      this.presentToast('Wrong mail', false, 'middle', 3000);
    }
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


  logout() {
    (<any>window)
      .AccountKitPlugin
      .logout()
    
  }
}
