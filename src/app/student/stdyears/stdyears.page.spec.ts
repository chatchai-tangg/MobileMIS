import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdyearsPage } from './stdyears.page';

describe('StdyearsPage', () => {
  let component: StdyearsPage;
  let fixture: ComponentFixture<StdyearsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdyearsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdyearsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
