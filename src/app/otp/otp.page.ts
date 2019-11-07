import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OTPPage{

  phone: string = ''

  constructor(
    private router: Router
  ) { }

  login() {
    (<any>window)
      .AccountKitPlugin
      .loginWithPhoneNumber({
        useAccessToken: true,
        defaultCountryCode: "MM",
        facebookNotificationsEnabled: true,
        initialPhoneNumber: ['95', this.phone]
      }, (successdata) => {
        (<any>window).AccountKitPlugin.getAccount((user) => {

          this.phone = ''
          this.router.navigate(['signup'])
        })
      }, (err) => {
        console.log(err)
      })
  }

}
