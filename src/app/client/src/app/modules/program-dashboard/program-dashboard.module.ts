import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiModule } from 'ng2-semantic-ui-v9';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResourceService, ToasterService, SharedModule } from '@sunbird/shared';
import { programDashboardRoutingModule } from './program-dashboard-routing.module';
import { TelemetryModule } from '@sunbird/telemetry';
import { NgInviewModule } from 'angular-inport';
import { SharedFeatureModule } from '@sunbird/shared-feature';
import { DatasetsComponent } from './components/program-datasets/program-datasets.component';
import { DashletModule } from '@project-sunbird/sb-dashlet-v9';
import { DashboardModule} from '../dashboard';
import { BigDataPipe } from './pipes/bigData/big-data.pipe';
import { ChartTypePipe } from './pipes/chartType/chart-type.pipe';
import { SbChartComponent } from './shared/sb-chart/sb-chart.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FilterChartPipe } from './pipes/filterChart/filter-chart.pipe';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
  DatasetsComponent,
  BigDataPipe,
  ChartTypePipe,
  SbChartComponent,
  FilterChartPipe
],
  imports: [
    CommonModule,
    SharedModule,
    SharedFeatureModule,
    SuiModule,
    HttpClientModule,
    TelemetryModule,
    FormsModule,
    ReactiveFormsModule,
    programDashboardRoutingModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatAutocompleteModule,
    NgInviewModule,
    DashletModule,
    DashboardModule
  ],
  providers: [
    ResourceService,
    ToasterService,
    BigDataPipe,
    ChartTypePipe,
    FilterChartPipe,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ]
})
export class programDashboardModule {

}
