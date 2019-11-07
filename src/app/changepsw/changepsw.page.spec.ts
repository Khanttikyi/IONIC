import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepswPage } from './changepsw.page';

describe('ChangepswPage', () => {
  let component: ChangepswPage;
  let fixture: ComponentFixture<ChangepswPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepswPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepswPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
