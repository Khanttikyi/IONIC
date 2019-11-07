import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-changepsw',
  templateUrl: './changepsw.page.html',
  styleUrls: ['./changepsw.page.scss'],
})
export class ChangepswPage implements OnInit {
  user: any;
  password: string = '';
  error: string;
  constructor(private navCtrl: NavController,private toastController: ToastController, public loadingController: LoadingController,private fireauth: AngularFireAuth,private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem("langauge")=="myanmar"){
      (<HTMLInputElement>document.getElementById('changepsw')).innerHTML = "စကား၀ွက္ေျပာင္းရန္";
      (<HTMLInputElement>document.getElementById('changepswbtn')).innerHTML = "စကား၀ွက္ေျပာင္းမည္";
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


  update(){
    var old=(<HTMLInputElement>document.getElementById('oldpass')).value;

    if (old == this.user.password){
    alert("success");
    }else{
      alert(old);
    }
   
  }

  updatePassword() {
    if (this.password != ""){
      if(this.password.length > 5){
    this.user.updatePassword(this.password)
      .then(() => {
        this.password = '';
        this.presentToast('Password Updated Successfully', false, 'middle', 3000);
        this.router.navigate(['login'])
        this.navCtrl.navigateRoot('/login');
        this.error = '';
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
      });}else{
        this.presentToast('Password must be 6 characters', false, 'middle', 3000);
      }
    }
    else{
      this.presentToast('Blank Password', false, 'middle', 3000);
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

}
