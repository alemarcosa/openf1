import { Component, inject, OnInit } from '@angular/core';
import { IonContent, IonAvatar, IonList, IonItem, IonLabel, IonInfiniteScroll, IonInfiniteScrollContent, IonCard } from "@ionic/angular/standalone";
import {Weather} from '../interfaces/weather';
import { WeatherService } from '../services/weather-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss'],
  standalone: true,
  imports:[IonContent, IonList, IonItem, IonAvatar, IonLabel, IonInfiniteScroll, IonInfiniteScrollContent],
})
export class WeatherDetailsComponent {

  weather: Weather[] = [];
  _apiWeather = inject(WeatherService);
  private _activatedRoute = inject(ActivatedRoute);

  constructor() {

    this._apiWeather.getWeather().subscribe((data) => {
      this.weather = data;
    });

  }
}

