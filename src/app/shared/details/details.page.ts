import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonItem, IonImg, IonButtons, IonBackButton, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent, IonCard, IonAvatar } from '@ionic/angular/standalone';
import { Session } from '../interfaces/session';
import { Driver } from '../interfaces/driver';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SessionService } from '../services/session-service';
import { DriverService } from '../services/driver-service';
export type SegmentMeetingDetail = 'sessions' | 'drivers';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonCard, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, RouterModule, IonBackButton, IonButtons, IonImg, IonItem, IonLabel, IonSegmentButton, IonSegment, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetailsPage  {

  segmentValue: 'sessions' | 'drivers' = 'sessions';
  meetingKey: string;
  sessions: Session[] = [];
  drivers: Driver[] = [];
  _apiDriver = inject(DriverService);
  _apiSession = inject(SessionService);
  private _activatedRoute = inject(ActivatedRoute)


  constructor() {
    this.meetingKey = this._activatedRoute.snapshot.params['idMeeting'];
    this._apiSession.getSession({meeting_key: parseInt(this.meetingKey)}).subscribe((data) => {
      this.sessions = data;
    });
    this._apiDriver.getDrivers({meeting_key: parseInt(this.meetingKey)}).subscribe((data) =>{
      this.drivers = data;
    } )
  }

  onSegmentChange(event: any){
    this.segmentValue = event.detail.value as SegmentMeetingDetail;
  }

}
