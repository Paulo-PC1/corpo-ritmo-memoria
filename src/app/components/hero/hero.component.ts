import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { SIMBOLO_IF } from '../../data/conteudo';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  simbolo = SIMBOLO_IF;

}