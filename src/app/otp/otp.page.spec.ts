import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OTPPage } from './otp.page';

describe('OTPPage', () => {
  let component: OTPPage;
  let fixture: ComponentFixture<OTPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OTPPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OTPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
