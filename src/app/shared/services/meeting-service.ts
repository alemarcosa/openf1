import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meeting } from '../interfaces/meeting';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private readonly _api: ApiService) {}

  getMeeting(attributes?: Partial<Meeting>): Observable<Meeting[]>{

    return this._api.getApi<Meeting,Meeting[]>('meetings', attributes);
  }

  /*getMeetingByYear(year:String): Observable<Meeting[]>{

    return this._http.get<Meeting[]>(
      `${this.base_url}/meetings?year=${year}`
    );

  }*/
}
