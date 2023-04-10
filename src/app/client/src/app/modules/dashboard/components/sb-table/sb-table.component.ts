import { Component, Input, AfterViewInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ResourceService } from '@sunbird/shared';


@Component({
  selector: 'app-sb-table',
  templateUrl: './sb-table.component.html',
  styleUrls: ['./sb-table.component.scss']
})
export class SbTableComponent implements AfterViewInit  {
  @Input() rowsData: Array<Object>;
  data = {};
  @Input() config;
  currentFilters: Array<{}>;
  // customFilters: any;
  constructor(private cdRef: ChangeDetectorRef, private resourceService: ResourceService) { }
  @ViewChild('lib', { static: false }) lib: any;

  loadTable() {
    // this.customFilters = this.config.filters.includes(fil => fil.dependency)
    this.data = {
      values: this.rowsData
    };
    this.cdRef.detectChanges();
  }
  ngAfterViewInit() {
    this.loadTable();
  }

  exportToCsv() {
    this.lib.instance.exportAs('csv');
  }
  reset() {
    this.lib.instance.reset();
    this.loadTable();
  }

  getTableData() {
    return [{ id: this.config.id , data: this.rowsData , selectedFilters: this.currentFilters }];
  }

  public filterChanged(data: any): void {
    console.log('data',data)
    this.currentFilters = data.filters;
    this.rowsData['selectedFilters'] = data.filters ? data.filters : {}
    delete data.chartData[0].data['selectedFilters']
    this.lib.instance.update({data:data.chartData[0].data})
    console.log('rows data',this.rowsData);
  }
}
