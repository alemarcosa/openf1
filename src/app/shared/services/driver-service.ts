import { Injectable } from '@angular/core';
import { Driver } from '../interfaces/driver';
import { Observable, switchMap } from 'rxjs';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root'
})
export class DriverService {


  constructor(private readonly _api: ApiService) {}


  getDrivers(attributes?: Partial<Driver>): Observable<Driver[]> {
    return this._api.getApi<Driver,Driver[]>('drivers',attributes)
    //return this._http.get<Driver[]>( `${this.base_url}/drivers`,{params})
  }
}
