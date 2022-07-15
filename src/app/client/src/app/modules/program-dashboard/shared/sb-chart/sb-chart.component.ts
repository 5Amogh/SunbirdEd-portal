import { Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResourceService } from '@sunbird/shared';
import _ from 'lodash';
@Component({
  selector: 'app-sb-chart',
  templateUrl: './sb-chart.component.html',
  styleUrls: ['./sb-chart.component.scss']
})
export class SbChartComponent implements OnInit,OnChanges{
  @Input() chart;
  @Input() lastUpdatedOn;
  @Input() hideElements = false;
  @Input() globalDistrict;
  @Input() globalOrg;  
  chartData;
  chartConfig;
  currentFilters: Array<{}>;
  resetFilters;
  updatedData;
  type:string;
  availableChartTypeOptions = ['Bar', 'Line'];
  @ViewChild('lib', { static: false }) lib: any;
  @ViewChild('filterPopUpMat') filterPopUpMat: TemplateRef<any>;
  filterType = 'chart-filter';
  dialogRef: any;
  constructor(
    public resourceService: ResourceService,
    public dialog: MatDialog
  ) { }

  ngOnInit(){
    this.updatedData = this.chartData = this.chart.chartData;
    this.chartConfig = this.chart.chartConfig;
    this.type = this.chartConfig.chartType;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes in chart comp',changes);
    if(this.globalDistrict !== undefined || this.globalOrg !== undefined){
      this.resetForm();
      this.updatedData = _.filter(this.chartData,(data)=>{
        return (this.globalDistrict && this.globalOrg 
          ? data.district_externalId == this.globalDistrict && data.organisation_id == this.globalOrg 
          : this.globalDistrict ? data.district_externalId == this.globalDistrict
          :this.globalOrg ? data.organisation_id == this.globalOrg 
          : data)
    });
    console.log('The global update',this.updatedData);
    this.lib.instance.update({data:this.updatedData})  
    }
  }

  changeChartType(change) {
    console.log('this.chartConfig.labelsExpr',this.chartConfig.labelsExpr)
    this.type = _.lowerCase(_.get(change, 'value'));
    this.chartConfig['chartType'] = this.type;
    this.chartConfig.filters.map(data => {
      delete data?.options
    })
    this.lib.instance.update({data:this.updatedData,type:this.type,config:this.chartConfig})
  }

  filterChanged(data: any): void {
    console.log('filterChanged method called',data)
    this.currentFilters = data.filters;
    if (data.filters) {
      console.log('entered data.filters',data.filters)
      this.chartData['selectedFilters'] = data.filters;
    } else {
      console.log('entered w/o data.filters')
      this.chartData['selectedFilters'] = {};
      this.resetFilters = { data:  (this.globalDistrict || this.globalOrg) ? this.updatedData : this.chartData, reset: true };
    }
    this.updatedData = data.chartData[0].data;
    this.lib.instance.update({data:this.updatedData});

  }

  resetForm() {
    this.chartData['selectedFilters'] = {};
    this.currentFilters = [];
    this.updatedData =  (this.globalDistrict || this.globalOrg) ? this.updatedData : this.chartData
    this.resetFilters = { data: this.updatedData, reset: true };
    console.log('reset form called',this.resetFilters)
    this.lib.instance.update({data:this.updatedData});
  }

  filterModalPopup(operator) {
    console.log('Popup operated')
    if (operator == false) {
      this.closeDialog();
    }  else {
      if (this.currentFilters) {
        this.chartData['selectedFilters'] = this.currentFilters;
        this.resetFilters = { data: (this.globalDistrict || this.globalOrg) ? this.updatedData : this.chartData, reset: true };
      } else {
        this.chartData['selectedFilters'] = {};
      }
      console.log('The global update',this.updatedData);
      this.openDialog();
    }

  }


  openDialog() {
    if (this.filterPopUpMat) {
      this.dialogRef = this.dialog.open(this.filterPopUpMat);
    }
  }
  
  closeDialog() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

}
