/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KategorieComponent } from './kategorie.component';

describe('KategorieComponent', () => {
  let component: KategorieComponent;
  let fixture: ComponentFixture<KategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
