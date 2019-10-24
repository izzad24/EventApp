import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPagePage } from './event-page.page';

describe('EventPagePage', () => {
  let component: EventPagePage;
  let fixture: ComponentFixture<EventPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
