import { Component } from '@angular/core';

import { SITE } from '../../data/site.config';

@Component({
  selector: 'app-projeto',
  standalone: true,
  templateUrl: './projeto.component.html',
  styleUrl: './projeto.component.css'
})
export class ProjetoComponent {

  site = SITE;

}