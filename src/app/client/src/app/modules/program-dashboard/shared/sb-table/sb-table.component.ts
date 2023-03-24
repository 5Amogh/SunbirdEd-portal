import { Component, Input, OnChanges, OnInit, SimpleChanges,ViewChild} from '@angular/core';
import * as _ from "lodash-es";
import { PdServiceService } from '../services/pd-service/pd-service.service';
@Component({
  selector: 'app-sb-table',
  templateUrl: './sb-table.component.html',
  styleUrls: ['./sb-table.component.scss']
})
export class SbTableComponent implements OnInit, OnChanges {
  @Input() tableToCsv;
  @Input() table;
  @Input() hideElements = false;
  tableData;
  globalData;
  globalChange;
  filtered;
  unfiltered;
  @Input() appliedFilters;
//  {
//     district_externalId:'2f76dcf5-e43b-4f71-a3f2-c8f19e1fce03',
//     organisation_id:['0126796199493140480','0127920475840593920'] //testing for block data
// }
  keys = ['district_externalId', 'organisation_id', 'program_id', 'solution_id', 'programId', 'solutionId']
  @ViewChild('lib', { static: false }) lib: any;
  constructor(
    public filterService:PdServiceService
  ) {
      // This is intentional
   }

  ngOnInit(): void {
    this.tableData = this.table?.data;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.tableData = this.table?.data;

    if (changes['tableToCsv'] && !changes['tableToCsv'].isFirstChange()) {
      this.exportToCsv();
    }
    this.checkForGlobalChanges();
  }

  exportToCsv() {
    this.lib.instance.exportAs('csv',{strict:true});
  }

  checkForGlobalChanges() {
    _.remove(this.table.config
      ? this.table?.config?.columnConfig
      : this.table?.columnsConfiguration?.columnConfig, (col) => {
        return  _.find(this.keys, (key) => {
          return col['data'] == key
        });
      })

    if (Object.keys(this.appliedFilters).length) {
      this.globalData = this.filterService.getFilteredData(this.tableData,this.appliedFilters)
      this.filtered = this.globalData.map(({ _district_externalId, _organisation_id, _program_id, _solution_id, _programId, _solutionId, ...data }) => data)
      this.globalChange = true;
      this.lib.instance.update({data:this.filtered})
    } else {
      this.globalChange = false;
      this.unfiltered = this.tableData.map(({ _district_externalId, _organisation_id, _program_id, _solution_id, _programId, _solutionId, ...data }) => data)

    }
  }
}
