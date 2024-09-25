import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import {IonItem, IonLabel, IonList, IonImg, IonAvatar, IonCard } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Driver } from '../../interfaces/driver';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports:[IonImg,IonItem, IonLabel, IonList, IonAvatar, IonCard, CommonModule],
})
export class ListComponent   implements OnInit{

  @Input() driversInput:Driver[] = [];
  @Output() eventoVersoPadre = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  click(){
    this.eventoVersoPadre.emit('test');
  }

}
