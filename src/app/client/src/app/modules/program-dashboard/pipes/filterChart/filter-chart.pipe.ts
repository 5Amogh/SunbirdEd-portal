import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterChart'
})
export class FilterChartPipe implements PipeTransform {

  transform(configId: any, chartData:any,currentFilters:any): unknown {
    console.log('calling getchartData',chartData)
    console.log('calling configId',configId)
    console.log('calling currentFilters',currentFilters)
    return [{ id: configId, data: chartData , selectedFilters: currentFilters }];
  }

}
