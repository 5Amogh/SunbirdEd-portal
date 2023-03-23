import { Injectable } from '@angular/core';
import * as _ from "lodash-es";

@Injectable({
  providedIn: 'root'
})
export class SbDataFilterService {

  constructor() { }

  getFilteredData(data,selectedFilters){
   return  _.filter(data, (dataItem) => {
      return _.every(selectedFilters, (value,key)=>{
        if(dataItem && dataItem[key]){
          if(_.isArray(value)){
            return _.some(value,val => val === dataItem[key])
          }
          return value === dataItem[key]
        }
      })
    })
  }
}
