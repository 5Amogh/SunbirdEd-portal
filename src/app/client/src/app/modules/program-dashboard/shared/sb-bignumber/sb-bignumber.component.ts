import { Component, Input, OnChanges, OnInit, QueryList, SimpleChanges, TemplateRef, ViewChild, ViewChildren, ViewContainerRef} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BigDataPipe } from '../../pipes/bigData/big-data.pipe';
import { ResourceService } from '@sunbird/shared';
import _ from 'lodash';
import { DashletComponent } from '@project-sunbird/sb-dashlet-v9';

@Component({
  selector: 'app-sb-bignumber',
  templateUrl: './sb-bignumber.component.html',
  styleUrls: ['./sb-bignumber.component.scss'],
  providers:[BigDataPipe]
})
export class SbBignumberComponent implements OnInit, OnChanges {
  @Input() chart;
  @Input() lastUpdatedOn;
  @Input() hideElements = false;
  @Input() globalDistrict;
  @Input() globalOrg;  
  chartData;
  chartConfig;
  updatedData;
  globalChange:boolean;
  globalData;
  @ViewChild('outlet', { read: ViewContainerRef }) outletRef: ViewContainerRef;
  @ViewChild('content', { read: TemplateRef }) contentRef: TemplateRef<any>;
  constructor(
    public resourceService: ResourceService,
    public dialog: MatDialog,
    public bigPipe : BigDataPipe
  ) { }

  ngOnInit(){
    this.updatedData = this.chartData = _.compact(this.chart.chartData);
    this.chartConfig = this.chart.chartConfig;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.globalDistrict !== undefined || this.globalOrg !== undefined){
      this.globalData = _.filter(this.chartData,(data)=>{
        return (this.globalDistrict && this.globalOrg 
          ? data?.district_externalId == this.globalDistrict && data?.organisation_id == this.globalOrg 
          : this.globalDistrict ? data?.district_externalId == this.globalDistrict
          :this.globalOrg ? data?.organisation_id == this.globalOrg 
          : data)
    });
    this.globalChange = true;
    this.updatedData = this.globalData;
    this.outletRef.clear();
    this.outletRef.createEmbeddedView(this.contentRef);
    }else{
      this.globalData = this.chartData;
      this.globalChange = false;

    }
  }

}
