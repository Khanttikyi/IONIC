import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {
	user: any;
  constructor(private fireauth: AngularFireAuth) {
	  
   }

   ionViewDidEnter() {
    this.fireauth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        console.log(this.user);
      }
    })
  }

  ngOnInit() {

   
    if(localStorage.getItem("langauge")=="myanmar"){
		(<HTMLInputElement>document.getElementById('qrpoint')).innerHTML = "ပိြုင္႔အေရအတြက္";
		(<HTMLInputElement>document.getElementById('accnum')).innerHTML = "Techno Reward အေကာင္႔နံပာတ္";
		(<HTMLInputElement>document.getElementById('accuser')).innerHTML = "Techno Reward အေကာင္႔ပိုင္ရွင္";
		(<HTMLInputElement>document.getElementById('scanqr')).innerHTML = "QR Code ဖတ္ရန္";
		(<HTMLInputElement>document.getElementById('expireqr')).innerHTML = "QR Code ကုန္ဆံုးရန္ ";
		(<HTMLInputElement>document.getElementById('minutes')).innerHTML = " မိနစ္သာလုိပါေတာ႔သည္";
		(<HTMLInputElement>document.getElementById('try')).innerHTML = "ထပ္မံျကိုးစားရန္";
	  }

	clearInterval(intervalHandle);
	qrgenerate();
	startCountdown();
	$("#try").click(function(){
		tryagain();
	  });
  }

}
var a = "1";
var ss = ["002", "Arkar", "1" , "ss" ,a];


function tryagain(){
  clearInterval(intervalHandle);
  document.getElementById("qrimg").style.display = "block";
  ss[0] = ss[0] + 1;
  qrgenerate();
  startCountdown();

  document.getElementById("try").style.display = "none";
}

//qrgenerate
function qrgenerate(){
  $(".qr-code").attr("src", "https://chart.googleapis.com/chart?cht=qr&chl=" + htmlEncode(ss) + "&chs=160x160&chld=L|0");
}


var secondsRemaining;
var intervalHandle;

function tick(){
	var timeDisplay = document.getElementById("time");

	var min = Math.floor(secondsRemaining / 60);
	var sec = secondsRemaining - (min * 60);

	// concatenate with colon
	var message = min.toString() + ":" + sec;

	// now change the display
	timeDisplay.innerHTML = message;

	// stop is down to zero
	if (secondsRemaining === 0){
    clearInterval(intervalHandle);
    document.getElementById("qrimg").style.display = "none";
    document.getElementById("try").style.display = "block";
	}
	//subtract from seconds remaining
	secondsRemaining--;
}

function startCountdown(){

	// get countents of the "minutes" text box
	var minutes = 3;
	
	// check if not a number
	if (isNaN(minutes)){
		alert("Please enter a number");
		return; // stops function if true
	}

	// how many seconds
	secondsRemaining = minutes * 60;
	
	//every second, call the "tick" function
	intervalHandle = setInterval(tick, 1000);
}



//value change for qr code
function htmlEncode (value){
  return $('<div/>').text(value).html();
}



