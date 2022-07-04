import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

@Pipe({
  name: 'bigData',
})
export class BigDataPipe implements PipeTransform {

  transform(bigData: any, bigConfig:object): unknown {
    if(_.isArray(bigData)){
      if(bigConfig){
        let data = [];
        bigData.forEach(expression => {
          if(expression?.hasOwnProperty(_.get(bigConfig, 'dataExpr'))){
            data.push(expression);
          }
        })
        let applicableData = {
          values:_.compact(data)
        }
        console.log('Data',data)
        return applicableData;
      }else {
        let applicableData = {
          values:_.compact(bigData)
        }
        return applicableData;
      }
    }else{
        if(bigData?.hasOwnProperty('header')){
          const bigConfig = {
            header:_.get(bigData, 'header'),
            footer:_.get(bigData, 'footer'),
            dataExpr:_.get(bigData, 'dataExpr'),
            operation:"SUM"
          }

          console.log('Big config',bigConfig)
          return bigConfig;
        }
    }
    
  }

}
