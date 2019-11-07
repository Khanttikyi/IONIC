
import { Component, OnInit } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit{
  email: string = '';
  password: string = '';
  error: string = '';
  username: string = '';
  image : string = '';
  constructor(private fireauth: AngularFireAuth, private router: Router, private toastController: ToastController, private platform: Platform, public loadingController: LoadingController,
    public alertController: AlertController,private navCtrl: NavController) {

  }
  ngOnInit() {
    if(localStorage.getItem("langauge")=="myanmar"){
      (<HTMLInputElement>document.getElementById('register')).innerHTML = "ဆက္သြားရန္";
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

  signup() {
    this.fireauth.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then(res => {
        if (res.user) {
          console.log(res.user);
          this.updateProfile();
          this.navCtrl.navigateForward('/register');
        }
      })
      .catch(err => {
        console.log(`login failed ${err}`);
        this.error = err.message;
      });
  }

  updateProfile() {
    this.fireauth.auth.onAuthStateChanged((user) => {
      if (user) {
        //alert(this.password);
        console.log(user);
        user.updateProfile({
          displayName: this.username,

          photoURL: `https://picsum.photos/id/1/200/200`
        })
          .then(() => {
            //this.router.navigateByUrl('/home');
          })
      }
    })
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
