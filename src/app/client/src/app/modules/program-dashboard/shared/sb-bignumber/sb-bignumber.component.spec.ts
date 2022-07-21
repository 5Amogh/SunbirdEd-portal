import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbBignumberComponent } from './sb-bignumber.component';

describe('SbBignumberComponent', () => {
  let component: SbBignumberComponent;
  let fixture: ComponentFixture<SbBignumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbBignumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbBignumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
