import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillistPage } from './detaillist.page';

describe('DetaillistPage', () => {
  let component: DetaillistPage;
  let fixture: ComponentFixture<DetaillistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaillistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
