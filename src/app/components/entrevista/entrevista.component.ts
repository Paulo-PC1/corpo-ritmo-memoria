import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { SITE } from '../../data/site.config';

@Component({
  selector: 'app-entrevista',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './entrevista.component.html',
  styleUrl: './entrevista.component.css'
})
export class EntrevistaComponent {

  site = SITE;
  videoSeguro: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {
    // Enquanto não houver vídeo, mostramos a caixa tracejada
    if (SITE.videoEmbed) {
      this.videoSeguro = this.sanitizer.bypassSecurityTrustResourceUrl(SITE.videoEmbed);
    }
  }

}