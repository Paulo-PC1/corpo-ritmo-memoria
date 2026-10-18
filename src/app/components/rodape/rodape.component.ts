import { Component } from '@angular/core';

import { SITE } from '../../data/site.config';

@Component({
  selector: 'app-rodape',
  standalone: true,
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.css'
})
export class RodapeComponent {

  site = SITE;

}