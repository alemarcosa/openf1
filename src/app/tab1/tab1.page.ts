import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonSpinner, IonAlert, IonButton, IonSkeletonText } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ListComponent } from '../shared/components/list/list.component';
import { Driver } from '../shared/interfaces/driver';
import { DriverService } from '../shared/services/driver-service';
import { catchError, of } from 'rxjs';
import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonSkeletonText, IonButton, IonAlert, IonSpinner, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonList, IonItem, IonLabel, ListComponent],
})
export class Tab1Page {

  isLoading = false;
  isError = false;

  _apiDrivers = inject(DriverService)
  _alertCtrl = inject(AlertController);

  drivers: Driver[] = [];

  constructor() {
    this.isLoading = true;
    this._apiDrivers.getDrivers().pipe(
      catchError((err) =>{
        this.isError = true;
        this.presentAlert(err.message);
        this.isLoading = false;
        return of([]);

    })).subscribe((data) =>{
      this.isLoading = false;
      this.drivers = data;
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

  clickFiglio(str: string){

  }

}
