import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInfo2Component } from './show-info2.component';

describe('ShowInfo2Component', () => {
  let component: ShowInfo2Component;
  let fixture: ComponentFixture<ShowInfo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInfo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
