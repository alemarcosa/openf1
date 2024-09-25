import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meeting } from '../interfaces/meeting';
import { ApiService } from './api-service';
import { Session } from '../interfaces/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {


  constructor(private readonly _api: ApiService) {}


  getSession(attributes?: Partial<Session>): Observable<Session[]>{

    return this._api.getApi<Session,Session[]>('sessions', attributes);
  }

}
