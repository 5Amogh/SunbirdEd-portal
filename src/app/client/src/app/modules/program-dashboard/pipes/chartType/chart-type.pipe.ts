import { Pipe, PipeTransform } from "@angular/core";
import _ from "lodash";

@Pipe({
  name: "chartType",
})
export class ChartTypePipe implements PipeTransform {
  transform(chartData: any): unknown {
    if (_.isArray(chartData)) {
      let applicableData = {
        values: _.compact(chartData),
      };
      console.log("chartData", applicableData);
      return applicableData;
    } else {
      const config = {
        colors: _.get(chartData, "colors"),
        datasets: _.get(chartData, "datasets"),
        options: _.get(chartData, "options"),
        labelExpr:
          _.get(chartData, "labelsExpr") || _.get(chartData, "labelExpr"),
        filters: _.get(chartData, "filters"),
        type: _.get(chartData, "chartType") || _.get(chartData, "type"),
      };
      console.log("Chart config", config);
      return config;
    }
  }
}
