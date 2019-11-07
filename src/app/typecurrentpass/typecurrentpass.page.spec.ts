import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecurrentpassPage } from './typecurrentpass.page';

describe('TypecurrentpassPage', () => {
  let component: TypecurrentpassPage;
  let fixture: ComponentFixture<TypecurrentpassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypecurrentpassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypecurrentpassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
