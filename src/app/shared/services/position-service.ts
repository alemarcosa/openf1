import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meeting } from '../interfaces/meeting';
import { ApiService } from './api-service';
import { Position } from '../interfaces/position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private readonly _api: ApiService) {}

  getPosition(attributes?: Partial<Position>, p0?: number): Observable<Position[]>{

    return this._api.getApi<Position,Position[]>('position', attributes);
  }

  /*getMeetingByYear(year:String): Observable<Meeting[]>{

    return this._http.get<Meeting[]>(
      `${this.base_url}/meetings?year=${year}`
    );

  }*/
}
