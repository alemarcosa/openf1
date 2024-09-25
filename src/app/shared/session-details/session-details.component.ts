import { Component, inject, Input } from '@angular/core';
import {IonItem, IonLabel, IonList, IonImg, IonContent, IonButtons, IonBackButton, IonSegment, IonSegmentButton, IonAvatar } from '@ionic/angular/standalone';
import { DriverService } from '../services/driver-service';
import { Driver } from '../interfaces/driver';
import { ActivatedRoute } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { Position } from '../interfaces/position';
import { PositionService } from '../services/position-service';
import { forkJoin } from 'rxjs';
export type SegmentMeetingDetail = 'drivers' | 'positions';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.scss'],
  standalone: true,
  imports:[IonAvatar, ChartModule, IonImg,IonItem, IonLabel, IonList,IonContent, IonButtons, IonBackButton, IonSegment, IonSegmentButton],
})
export class SessionDetailsComponent{

  drivers: Driver[] = [];
  sessionKey: string;
  meetingKey: string;
  driverKey: string | undefined;
  positions_1: Position[] = [];
  positions_2: Position[] = [];
  positions_3: Position[] = [];
  positions_4: Position[] = [];
  positions_5: Position[] = [];
  positions_6: Position[] = [];
  positions_7: Position[] = [];
  positions_8: Position[] = [];
  positions_9: Position[] = [];
  positions_10: Position[] = [];
  posN1: number[] = [];
  posN2: number[] = [];
  posN3: number[] = [];
  posN4: number[] = [];
  posN5: number[] = [];
  posN6: number[] = [];
  posN7: number[] = [];
  posN8: number[] = [];
  posN9: number[] = [];
  posN10: number[] = [];
  posN11: number[] = [];
  posN12: number[] = [];
  posN13: number[] = [];
  posN14: number[] = [];
  _apiDrivers = inject(DriverService);
  _apiPositions = inject(PositionService);
  private _activatedRoute = inject(ActivatedRoute);
  segmentValue: 'drivers' | 'positions' = 'drivers';
  data: any;
  options: any;
  laps: String[] = [];

  private _test = "";

  //@Input() test = "";

  @Input() set test(value: string){
    if(value){
      this._test = value;
    }else {
      this._test = "NO TEST";
    }
  }

  get test(): string{

    return this._test;

  }

  constructor() {
    for (let index = 0; index < 80; index++) {
      this.laps[index] = 'Lap'+index ;
      
    }

    this.sessionKey = this._activatedRoute.snapshot.params['idSession'];
    this.meetingKey = this._activatedRoute.snapshot.params['idMeeting'];
    const {idSession} = this._activatedRoute.snapshot.params;
    const driverNumbers: number[] = [1, 2, 3,4,10,11,14,16,55,44];

    const $FirstDriverArray = this._apiPositions.getPosition({ session_key: idSession, driver_number: driverNumbers[0]});
    const $SecondDriverArray = this._apiPositions.getPosition({ session_key: idSession, driver_number: driverNumbers[1]});
    const $ThirdDriverArray = this._apiPositions.getPosition({ session_key: idSession, driver_number: driverNumbers[2]});
    const $ForthDriverArray = this._apiPositions.getPosition({ session_key: idSession, driver_number: driverNumbers[3]});
    const $FifthDriverArray = this._apiPositions.getPosition({ session_key: idSession, driver_number: driverNumbers[4]});
    const $SixthDriverArray = this._apiPositions.getPosition({ session_key: idSession, driver_number: driverNumbers[5]});
    const $SeventhDriverArray = this._apiPositions.getPosition({ session_key: idSession, driver_number: driverNumbers[6]});
    const $EighthDriverArray = this._apiPositions.getPosition({ session_key: idSession, driver_number: driverNumbers[7]});
    const $NinthDriverArray = this._apiPositions.getPosition({ session_key: idSession, driver_number: driverNumbers[8]});
    const $TenthDriverArray = this._apiPositions.getPosition({ session_key: idSession, driver_number: driverNumbers[9]});


    forkJoin([

      $FirstDriverArray,
      $SecondDriverArray,
      $ThirdDriverArray,
      $ForthDriverArray,
      $FifthDriverArray,
      $SixthDriverArray,
      $SeventhDriverArray ,
      $EighthDriverArray,
      $NinthDriverArray ,
      $TenthDriverArray

    ]).subscribe({
      next: (values) => {

       this.positions_1 = values[0];
       this.positions_2 = values[1];
       this.positions_3 = values[2];
       this.positions_4 = values[3];
       this.positions_5 = values[4];
       this.positions_6 = values[5];
       this.positions_7 = values[6];
       this.positions_8 = values[7];
       this.positions_9 = values[8];
       this.positions_10 = values[9];

       this.posN1 = this.positions_1.map((pos) => pos.position);
       this.posN2 = this.positions_2.map((pos) => pos.position);
       this.posN3 = this.positions_3.map((pos) => pos.position);
       this.posN4 = this.positions_4.map((pos) => pos.position);
       this.posN5 = this.positions_5.map((pos) => pos.position);
       this.posN6 = this.positions_6.map((pos) => pos.position);
       this.posN7 = this.positions_7.map((pos) => pos.position);
       this.posN8 = this.positions_8.map((pos) => pos.position);
       this.posN9 = this.positions_9.map((pos) => pos.position);
       this.posN10 = this.positions_10.map((pos) => pos.position);

       this.showGraph();

      }});


    this._apiDrivers.getDrivers({session_key: parseInt(this.sessionKey)}).subscribe((data) =>{
      this.drivers = data;
    });

  }

  showGraph(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
        labels: this.laps,
        datasets: [
            {
                label: 'Max VERSTAPPEN',
                fill: false,
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                yAxisID: 'y',
                tension: 0.4,
                data: this.posN1
            },
            {
                label: 'Logan SARGEANT',
                fill: false,
                borderColor: documentStyle.getPropertyValue('--blue-300'),
                yAxisID: 'y1',
                tension: 0.4,
                data: this.posN2
            },
            {
              label: 'Daniel RICCIARDO',
              fill: false,
              borderColor: documentStyle.getPropertyValue('--blue-100'),
              yAxisID: 'y1',
              tension: 0.4,
              data: this.posN3
            },
            {
                label: 'Lando NORRIS',
                fill: false,
                borderColor: documentStyle.getPropertyValue('--orange-500'),
                yAxisID: 'y1',
                tension: 0.4,
                data: this.posN4
            },
            {
                label: 'Pierre GASLY',
                fill: false,
                borderColor: documentStyle.getPropertyValue('--blue-200'),
                yAxisID: 'y1',
                tension: 0.4,
                data: this.posN5
            },
            {
                label: 'Sergio PEREZ',
                fill: false,
                borderColor: documentStyle.getPropertyValue('--blue-400'),
                yAxisID: 'y1',
                tension: 0.4,
                data: this.posN6
            },
            {
                label: 'Fernando ALONSO',
                fill: false,
                borderColor: documentStyle.getPropertyValue('--green-500'),
                yAxisID: 'y1',
                tension: 0.4,
                data: this.posN7
            },
            {
                label: 'Charles LECLERC',
                fill: false,
                borderColor: documentStyle.getPropertyValue('--red-500'),
                yAxisID: 'y1',
                tension: 0.4,
                data: this.posN8
            },
            {
                label: 'Carlos SAINZ',
                fill: false,
                borderColor: documentStyle.getPropertyValue('--red-300'),
                yAxisID: 'y1',
                tension: 0.4,
                data: this.posN9
            },
            {
                label: 'Lewis HAMILTON',
                fill: false,
                borderColor: documentStyle.getPropertyValue('--green-300'),
                yAxisID: 'y1',
                tension: 0.4,
                data: this.posN10
            },

        ]
    };

    this.options = {
        stacked: false,
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    drawOnChartArea: false,
                    color: surfaceBorder
                }
            }
        }
    };
  }

  onSegmentChange(event: any){
    this.segmentValue = event.detail.value as SegmentMeetingDetail;
  }

}
