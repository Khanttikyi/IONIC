import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.page.html',
  styleUrls: ['./promotions.page.scss'],
})
export class PromotionsPage implements OnInit {
  loading;
  constructor(public loadingController: LoadingController) { }

  ngOnInit() {

    if(localStorage.getItem("langauge")=="myanmar"){
      (<HTMLInputElement>document.getElementById('promotion2')).innerHTML = "ပရိုမုိးရွင္း";
    }
  
    this.presentLoading();
    
    }
  
    async presentLoading() {
      const loading = await this.loadingController.create({
        message: 'Loading',
        duration: 2000
      });
      await loading.present();
  
      const { role, data } = await loading.onDidDismiss();
  
      console.log('Loading dismissed!');
    }
  
 

}


