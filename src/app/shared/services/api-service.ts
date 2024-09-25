import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _http = inject(HttpClient)
  base_url = "https://api.openf1.org/v1/";

  constructor() {}


  getApi<T, Y>(url: string, attributes?: Partial<T>): Observable<Y> {
    const params = this._getParams(attributes);
    return this._http.get<Y>( `${this.base_url}${url}`,{params})
  }


  private _getParams<T>(attributes?:Partial<T>): HttpParams{
    let params = new HttpParams();
    if(attributes){
      Object.keys(attributes).forEach((key) => {
        const value = attributes[key as keyof T];
        if(value){
          params = params.set(key, value.toString());
        }
      })
    }
    return params;
  }

}
