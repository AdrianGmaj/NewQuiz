/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ScorePageComponent } from './score-page.component';

describe('ScorePageComponent', () => {
  let component: ScorePageComponent;
  let fixture: ComponentFixture<ScorePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
