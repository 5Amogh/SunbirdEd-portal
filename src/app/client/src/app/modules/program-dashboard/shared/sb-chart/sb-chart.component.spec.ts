import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbChartComponent } from './sb-chart.component';

describe('SbChartComponent', () => {
  let component: SbChartComponent;
  let fixture: ComponentFixture<SbChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
