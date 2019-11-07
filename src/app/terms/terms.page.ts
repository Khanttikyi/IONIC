import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {

  phone: string = ''
  
  constructor( private router: Router,private toastController: ToastController,public loadingController: LoadingController) { }

  ngOnInit() {
    if(localStorage.getItem("langauge")=="myanmar"){
      (<HTMLInputElement>document.getElementById('register')).innerHTML = "အေကာင္႔ဖြင္႔ရန္";
      (<HTMLInputElement>document.getElementById('terms')).innerHTML = "စည္းကမ္းသတ္မွတ္ခ်က္မ်ား";
      (<HTMLInputElement>document.getElementById('termsdetail')).innerHTML = "အသက္ ( ၁၇ ) ႏွစ္အရြယ္ပဲ ရွိေသးတဲ့ Xiao Wang ဟာ iPhone 11 Pro Max နဲ႔ iPad 7 တို႔ကို ဝယ္ယူဖို႔အတြက္သူ႔ရဲ့ ေက်ာက္ကပ္ကို $ 3000( RM 13000 ) ျဖင့္ ေရာင္းခ်ခဲ့ပါတယ္ ။ သူ႔မိဘေတြအေနျဖင့္ iPhone ကို မျဖစ္မေန လိုခ်င္ေတာင့္တေနတဲ့ သူ႔ရဲ့စိတ္ကို ခ်က္ခ်င္း ျဖည့္စည္းေပးနိုင္စြမ္း မရွိၾကပါဘူး ။ ၇ ရက္ၾကာၿပီးတဲ့ေနာက္မွာေတာ့ Wang ရဲ့ အစီအစဥ္ေတြဟာ လြင့္ပါး ေပ်ာက္ကြယ္ သြားၾကပါၿပီ ။Wang ဟာ ေမွာင္ခိုေစ်းကြက္ထဲက သူေတြနဲ႔ ေက်ာက္ကပ္ကို ေရာင္းခ်စဥ္မွာ သေဘာတူညီမွု ျပဳလုပ္ခဲ့တာ ရွိပါတယ္ ။ ျပင္းထန္တဲ့ ေရာဂါကို ခံစားလာရပါက သူ႔ေက်ာက္ကပ္ကို ျပန္ေပးဖို႔ပါ ။ ဒီေအာ္ပေရးရွင္းကိုတ႐ုတ္နိုင္ငံ ၊ Chenzhou မွာရွိတဲ့ တရားမဝင္ ေျမေအာက္ ေဆး႐ုံမွာ ျပဳလုပ္ခဲ့တာ ျဖစ္ပါတယ္ ။ ေအာ္ပေရးရွင္းၿပီးတဲ့ေနာက္ တစ္ပါတ္အၾကာမွာေတာ့ Wang ဟာ သူ႔ရဲ့ Normal Life ကို ျပန္လိုခ်င္မိတယ္လို႔ ဆိုပါတယ္ ။ စိတ္မေကာင္းစရာက ဒါ ဘယ္ေတာ့မွ ျပန္ျဖစ္နိုင္မွာ မဟုတ္ေတာ့ပါဘူး ။ Wang ကို ခြဲစိတ္မွုျပဳခဲ့တဲ့ အခန္းနဲ႔ခြဲခန္းသုံး ပစၥည္းေတြဟာ သန့္စင္ျခင္း မရွိတဲ့အတြက္ သူ႔ခြဲဒဏ္ရာမွာ ေရာဂါပိုး ကူးစက္ျခင္း ခံခဲ့ရပါတယ္ ။ ပိုဆိုးတာက Wang ဟာ iPhone ဝယ္ဖို႔ သူ႔ေက်ာက္ကပ္ကို ထုတ္ေရာင္းခဲ့ေၾကာင္း သူ႔မိသားစုအားဘယ္တုန္းကမွ ဖြင့္မေျပာခဲ့တာပါပဲ ။ Wang ကူးစက္ပိုးေၾကာင့္ ဆိုးဆိုးဝါးဝါး နားမက်န္း ျဖစ္လာၿပီး ခံစားလာရေတာ့မွ သူ႔မိသားစုက သိရွိရတာ ျဖစ္ပါတယ္ ။ စိတ္မေကာင္းစရာက Wang ဟာ သူ႔ေက်ာက္ကပ္ကို ထုတ္စဥ္မွာ ကူးစက္ခံလိုက္ရတဲ့ ေရာဂါပိုးေၾကာင့္ ျပင္းျပင္းထန္ထန္ ထိခိုက္ၿပီး ေဆး႐ုံကို ေရာက္တဲ့အခ်ိန္မွာ သိပ္ကို ေနာက္က်သြားပါၿပီ ။ အခုေတာ့ Wang ဟာ အျမဲတမ္း အိပ္ယာထဲမွာပဲ လွဲေနရၿပီး အသက္ဆက္ၿပီး ရွင္ေနရန္အတြက္Hemodialysis လုပ္ဖို႔ လိုအပ္ေနပါၿပီ ။ တုန္လွုပ္ေခ်ာက္ခ်ားဖြယ္ ဒီကိစၥႀကီးတစ္ခုလုံးအျပင္ Wang ရဲ့ မိသားစုအေပၚကို ထပ္မံ က်ေရာက္လာေစတာကေတာ့ ေနာက္ဆက္တြဲ ေဆးကုသမွု ကုန္က် စရိတ္ေတြပါပဲ ။Wang ရဲ့ မိသားစုအတြက္ ေက်းဇူးတင္စရာ ျဖစ္လာပါၿပီ ။ အဲဒါကေတာ့ ၾကားက ေစ့စပ္ေပးသူနဲ႔ ေျမေအာက္ ေဆး႐ုံတို႔အၾကား ေအာ္ပေရးရွင္းနဲ႔ ပါတ္သက္ၿပီး တရားစြဲဆိုမွုမွာ ေလ်ာ္ေၾကးေငြ အေျမာက္အမ်ားကို Wang ရဲ့ မိသားစု ရရွိလိုက္လို႔ပါပဲ ။";
      (<HTMLInputElement>document.getElementById('continue')).innerHTML = "အေကာင္႔၀င္ရန္";
      (<HTMLInputElement>document.getElementById('accept')).innerHTML = " စည္းကမ္းခ်က္မ်ားအားလက္ခံပါသည္";
    }
  }

  enablechkbox(){
    if ((<HTMLInputElement>document.getElementById('chkterms')).checked){

    (<HTMLInputElement>document.getElementById('continue')).disabled = true;
  }else{
      (<HTMLInputElement>document.getElementById('continue')).disabled = false;
  }
  }


  login() {
    this.presentLoading();
    // (<any>window)
    //   .AccountKitPlugin
    //   .loginWithPhoneNumber({
    //     useAccessToken: true,
    //     defaultCountryCode: "MM",
    //     facebookNotificationsEnabled: true,
    //     initialPhoneNumber: ['95', this.phone]
    //   }, (successdata) => {
    //     (<any>window).AccountKitPlugin.getAccount((user) => {

    //       this.phone = ''
    //       this.router.navigate(['signup'])
    //     })
    //   }, (err) => {
    //     console.log(err)
    //   })
    this.router.navigate(['signup'])
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


}
