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
import { BigDataPipe } from './pipes/big-data.pipe';
import { ChartTypePipe } from './pipes/chart-type.pipe';

@NgModule({
  declarations: [
  DatasetsComponent,
  BigDataPipe,
  ChartTypePipe
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
    NgInviewModule,
    DashletModule,
    DashboardModule
  ],
  providers: [
    ResourceService,
    ToasterService
  ]
})
export class programDashboardModule {

}
