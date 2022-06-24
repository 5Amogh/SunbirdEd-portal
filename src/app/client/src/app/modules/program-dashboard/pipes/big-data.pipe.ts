import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

@Pipe({
  name: 'bigData'
})
export class BigDataPipe implements PipeTransform {

  transform(bigData: any, bigConfig:object): unknown {
    if(_.isArray(bigData)){
      if(bigConfig){
        let data = [];
        bigData.forEach(expression => {
          if(expression && expression.hasOwnProperty(_.get(bigConfig, 'dataExpr'))){
            data.push(expression);
          }
        })
        let applicableData = {
          values:data
        }
        console.log('Data',data)
        return applicableData;
      }else{
        let applicableData = {
          values:bigData
        }
        console.log('chartData',applicableData) 
        return applicableData;
      }
    }else{
        if(bigData.hasOwnProperty('header')){
          const bigConfig = {
            "header":_.get(bigData, 'header'),
            "footer":_.get(bigData, 'footer'),
            "dataExpr":_.get(bigData, 'dataExpr'),
            "operation":"SUM"
          }

          console.log('Big config',bigConfig)
          return bigConfig;
        }else{
          const config = {
            colors:_.get(bigData,'colors'),
            datasets :_.get(bigData, 'datasets'),
            options:_.get(bigData,'options'),
            labelExpr: _.get(bigData,'labelsExpr'),
            filters:_.get(bigData,'filters')
          }
          console.log('Chart config',config)
          return config;
        }
    }
    
  }

}
