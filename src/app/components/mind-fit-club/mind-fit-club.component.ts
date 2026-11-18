import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CONTATOS_ACADEMIA, INSTAGRAM_PROFESSOR, WHATSAPP_ACADEMIA } from '../../data/mind-fit-club';

@Component({
  selector: 'app-mind-fit-club',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './mind-fit-club.component.html',
  styleUrl: './mind-fit-club.component.css'
})
export class MindFitClubComponent {

  contatos = CONTATOS_ACADEMIA;
  whatsapp = WHATSAPP_ACADEMIA;
  instagramProfessor = INSTAGRAM_PROFESSOR;

  // 36 barras: antes isso era feito por um <script>, agora é só dado para o *ngFor
  barras = Array.from({ length: 36 }, (_, n) => ({
    n,
    altura: 28 + Math.round(72 * Math.abs(Math.sin(n * 0.55) * Math.cos(n * 0.21)))
  }));

}
