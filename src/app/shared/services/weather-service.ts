import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api-service';
import { Weather } from '../interfaces/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private readonly _api: ApiService) {}

  getWeather(attributes?: Partial<Weather>): Observable<Weather[]>{

    return this._api.getApi<Weather,Weather[]>('weather', attributes);
  }

}
