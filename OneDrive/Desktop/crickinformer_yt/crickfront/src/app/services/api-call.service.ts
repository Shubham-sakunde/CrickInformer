import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private _httpclient:HttpClient) { }


  getAllMatches(){
    return this._httpclient.get("http://localhost:8084/match");
  }

  getLiveMatches(){
    return this._httpclient.get("http://localhost:8084/match/live");
  }

  getPointTable(){
    return this._httpclient.get("http://localhost:8084/match/point-table");
  }
}
