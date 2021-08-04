import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakedComponent } from './snaked.component';

describe('SnakedComponent', () => {
  let component: SnakedComponent;
  let fixture: ComponentFixture<SnakedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnakedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
