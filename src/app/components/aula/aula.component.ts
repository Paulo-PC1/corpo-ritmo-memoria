import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FOTOS_AULA, FotoAula } from '../../data/conteudo';
import { SITE } from '../../data/site.config';

@Component({
  selector: 'app-aula',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './aula.component.html',
  styleUrl: './aula.component.css'
})
export class AulaComponent {

  fotos: FotoAula[] = FOTOS_AULA;
  site = SITE;

}