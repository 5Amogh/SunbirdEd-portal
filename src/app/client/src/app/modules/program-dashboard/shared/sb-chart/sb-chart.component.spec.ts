import { FilterChartPipe } from '../../pipes/filterChart/filter-chart.pipe';
import { BigDataPipe } from '../../pipes/bigData/big-data.pipe';
import { ChartTypePipe } from '../../pipes/chartType/chart-type.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SbChartComponent } from './sb-chart.component';
import { DashletModule } from '@project-sunbird/sb-dashlet-v9';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../../shared/modules/material/material.module';
import { DashboardModule, ReportService } from '../../../dashboard'
import { TelemetryModule } from '@sunbird/telemetry';
import { ResourceService, SharedModule } from '@sunbird/shared';
import { mockChart } from './sb-chart.component.spec.data'
import { RouterTestingModule } from '@angular/router/testing';

describe('SbChartComponent', () => {
  let component: SbChartComponent;
  let fixture: ComponentFixture<SbChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        TelemetryModule.forRoot(),
        SharedModule.forRoot(),
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        DashletModule,
        DashboardModule
      ],
      providers:[ResourceService,ReportService],
      declarations: [ SbChartComponent, FilterChartPipe,BigDataPipe,ChartTypePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbChartComponent);
    component = fixture.componentInstance;
    component.chart = mockChart;
    component.lastUpdatedOn = mockChart.lastUpdatedOn;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
