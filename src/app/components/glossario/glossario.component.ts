import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { GLOSSARIO, TermoGlossario } from '../../data/conteudo';

@Component({
  selector: 'app-glossario',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './glossario.component.html',
  styleUrl: './glossario.component.css'
})
export class GlossarioComponent {

  termos: TermoGlossario[] = GLOSSARIO;

}