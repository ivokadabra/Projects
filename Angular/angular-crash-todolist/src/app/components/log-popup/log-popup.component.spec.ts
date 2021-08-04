import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogPopupComponent } from './log-popup.component';

describe('LogPopupComponent', () => {
  let component: LogPopupComponent;
  let fixture: ComponentFixture<LogPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
