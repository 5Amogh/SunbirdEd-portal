import { Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResourceService } from '@sunbird/shared';
import * as _ from "lodash-es";
import { SbDataFilterService } from '../services/sb-data-filter.service';
@Component({
  selector: 'app-sb-bignumber',
  templateUrl: './sb-bignumber.component.html',
  styleUrls: ['./sb-bignumber.component.scss']
})
export class SbBignumberComponent implements OnInit, OnChanges {
  @Input() chart;
  @Input() lastUpdatedOn;
  @Input() hideElements = false;
  @Input() globalDistrict;
  @Input() globalOrg;  
  @Input() globalBlock;
  appliedFilters = {
      district_externalId:'2f76dcf5-e43b-4f71-a3f2-c8f19e1fce03',
      organisation_id:['0126796199493140480','0127920475840593920'] //testing for block data
  }
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
    public filterService:SbDataFilterService
  ) { }

  ngOnInit(){
    this.updatedData = this.chartData = _.compact(this.chart.chartData);
    this.chartConfig = this.chart.chartConfig;
  }

  ngOnChanges(_changes: SimpleChanges): void {
   this.checkForChanges();
  }

  checkForChanges(){
    if(this.globalDistrict || this.globalOrg){
      console.log('Chart Data',this.chartData);
      console.log('district',this.globalDistrict,'org',this.globalOrg);
      this.globalData = this.filterService.getFilteredData(this.chartData,this.appliedFilters)
      // this.globalData = _.filter(this.chartData, (data) => {
      //   if(this.globalDistrict && this.globalOrg){
      //     return data?.district_externalId == this.globalDistrict && data?.organisation_id == this.globalOrg;
      //   }
      //   if(this.globalDistrict){
      //     if(this.globalBlock && this.globalBlock.length){
      //       return this.globalBlock.includes(data.organisation_id) && data.district_externalId == this.globalDistrict
      //     }
      //     return  data?.district_externalId == this.globalDistrict;
      //    } 
      //    if(this.globalOrg){
      //     return data?.organisation_id == this.globalOrg
      //    }

      //   return data;
      // });
      console.log('filtered big number data',this.globalData)
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
