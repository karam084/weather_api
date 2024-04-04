import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComponentserviceService {
  // API for weather
  APIURL = 'https://api.weather.gov/gridpoints/TOP/31,80/forecast';

  constructor(private _httpclient:HttpClient) { }
//Show data on chart
  showchartdata(){
    return this._httpclient.get(this.APIURL);
  }
}
