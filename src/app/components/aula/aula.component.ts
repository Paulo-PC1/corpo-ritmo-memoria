import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FOTOS_AULA, FotoAula } from '../../data/conteudo';
import { SITE } from '../../data/site.config';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  videoAulas: SafeResourceUrl | null = null;
  site = SITE;
  
  constructor(private sanitizer: DomSanitizer){
    if (SITE.videoAulas){
      this.videoAulas = this.sanitizer.bypassSecurityTrustResourceUrl(SITE.videoAulas);
    }
  }

}