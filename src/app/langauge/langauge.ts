export class Langauge{


    change_lan_myanmar(){
        (<HTMLInputElement>document.getElementById('profile')).innerHTML = "ပရိုဖိုင္";
        (<HTMLInputElement>document.getElementById('pay')).innerHTML = "ေပးေခ်မည္";
        (<HTMLInputElement>document.getElementById('change_pass')).innerHTML = "စကား၀ွက္ေျပာင္းရန္";
        (<HTMLInputElement>document.getElementById('logout')).innerHTML = "အေကာင့္မွထြက္ရန္";
        (<HTMLInputElement>document.getElementById('point')).innerHTML = "ပိြုင့္အေရအတြက္";
        (<HTMLInputElement>document.getElementById('hello')).innerHTML = "မ ဂၤ လာ ပာ , ";
        (<HTMLInputElement>document.getElementById('paycon')).innerHTML = "လြယ္ကူစြာေပးေခ်ပာ";
        (<HTMLInputElement>document.getElementById('cardno')).innerHTML = "ကတ္နံပါတ္";
        (<HTMLInputElement>document.getElementById('pointqr')).innerHTML = "ပိြုင့္အေရအတြက္";
    }
    
    change_lan_english(){
        (<HTMLInputElement>document.getElementById('profile')).innerHTML = "Profile";
        (<HTMLInputElement>document.getElementById('pay')).innerHTML = "Pay";
        (<HTMLInputElement>document.getElementById('change_pass')).innerHTML = "Change Password";
        (<HTMLInputElement>document.getElementById('logout')).innerHTML = "Logout";
        (<HTMLInputElement>document.getElementById('point')).innerHTML = "Your points";
        (<HTMLInputElement>document.getElementById('hello')).innerHTML = " H e l l o , ";
        (<HTMLInputElement>document.getElementById('paycon')).innerHTML = "Pay with convenience";
        (<HTMLInputElement>document.getElementById('cardno')).innerHTML = "Card Number";
        (<HTMLInputElement>document.getElementById('pointqr')).innerHTML = "Your points";
    }
}

