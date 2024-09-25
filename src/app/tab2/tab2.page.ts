import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonItem, IonImg, IonSpinner, IonSkeletonText, IonList, IonButton, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { catchError, of } from 'rxjs';
import { MeetingService } from '../shared/services/meeting-service';
import { Meeting } from '../shared/interfaces/meeting';
import {AlertController} from '@ionic/angular'
import { ActivatedRoute, RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { chevronForwardOutline, locationOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonIcon, RouterModule, IonSegmentButton, IonSegment, IonButton, IonList, IonSkeletonText, IonSpinner, IonImg, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonSelect, IonSelectOption]
})

export class Tab2Page {

  isLoading = false;
  isError = false;
  _apiMeeting = inject(MeetingService)
  _alertCtrl = inject(AlertController);

  grandPrize: Meeting[] = [];
  years: number[] = [];

  constructor() {
    addIcons({chevronForwardOutline, locationOutline});
    this.isLoading = true;
    this._apiMeeting.getMeeting().pipe(
      catchError((err) =>{
        this.isError = true;
        this.presentAlert(err.message);
        this.isLoading = false;
        return of([]);

    })).subscribe((data) =>{
      this.isLoading = false;
      this.grandPrize = data;

      const numbers = this.grandPrize.map((a: Meeting) => a.year);
      this.years = numbers.filter((item, index) => numbers.indexOf(item) === index);
    });

  }

  OnRefreshPage(){

    location.reload();

  }

  async presentAlert(message: String) {
    const alert = await this._alertCtrl.create({
      header: 'Ops!',
      message: `Si è verificato un errore: ${message}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  onClick(test: any){

     this._apiMeeting.getMeeting({year:test.detail.value}).subscribe((data) => {
      this.grandPrize = data;
     })
  }

}
