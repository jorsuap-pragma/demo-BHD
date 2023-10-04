import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';


@Component({
  selector: 'app-instructions-identify',
  templateUrl: './instructions-identify.component.html',
  styleUrls: ['./instructions-identify.component.scss']
})
export class InstructionsIdentifyComponent implements OnInit {

  constructor() { }

  events!: any[];
  currentStep:string = '';

  ngOnInit() {
      this.events = [
          {status: 'Concentimiento', date: '15/10/2020 10:30', icon: PrimeIcons.FILE_EDIT, color: '#002845', step: 'concentimiento', describe:'concentimiento para el tratamiento de datos biométricos'},
          {status: 'Captura facial', date: '15/10/2020 14:00', icon: PrimeIcons.CAMERA, color: '#002845', step:'Captura facial', describe:'Hagase una selfie'},
          {status: 'Captura de documento', date: '15/10/2020 16:15', icon: PrimeIcons.ID_CARD, color: '#002845', step:'Captura de documento', describe:'Haga una foto a su documento de identidad'},
      ];
  }

}
