import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LEITURAS, Leitura } from '../../data/conteudo';

@Component({
  selector: 'app-saiba-mais',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './saiba-mais.component.html',
  styleUrl: './saiba-mais.component.css'
})
export class SaibaMaisComponent {

  leituras: Leitura[] = LEITURAS;

}