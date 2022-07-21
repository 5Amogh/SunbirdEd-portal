import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-sb-table',
  templateUrl: './sb-table.component.html',
  styleUrls: ['./sb-table.component.scss']
})
export class SbTableComponent implements OnInit, OnChanges {
  @Input() table;
  @Input() hideElements = false;
  @Input() globalDistrict;
  @Input() globalOrg;  
  tableData;
  globalData;
  globalChange;
  @ViewChild('lib', { static: false }) lib: any;

  constructor() { }

  ngOnInit(): void {
    this.tableData = this.table?.data;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.tableData = this.table?.data;
    if(this.globalDistrict !== undefined || this.globalOrg !== undefined){
      this.globalData = _.filter(this.tableData,(data)=>{
        return (this.globalDistrict && this.globalOrg 
          ? data?.district_externalId == this.globalDistrict && data?.organisation_id == this.globalOrg 
          : this.globalDistrict ? data?.district_externalId == this.globalDistrict
          :this.globalOrg ? data?.organisation_id == this.globalOrg 
          : data)
    });
    this.globalChange = true;
    console.log('The global update',this.globalData);
    // this.lib.instance.update({data:this.globalData});
    }else{
      console.log('Global boolean changed')
      this.globalChange = false;
      // this.lib?.instance?.update({data:this.tableData});
    }
  }

}
