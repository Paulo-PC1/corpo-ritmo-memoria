import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { EventoHistoria, LINHA_DO_TEMPO } from '../../data/conteudo';

@Component({
  selector: 'app-historia',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './historia.component.html',
  styleUrl: './historia.component.css'
})
export class HistoriaComponent {

  eventos: EventoHistoria[] = LINHA_DO_TEMPO;

}