import { Component } from '@angular/core';

import { AulaComponent } from './components/aula/aula.component';
import { EntrevistaComponent } from './components/entrevista/entrevista.component';
import { GlossarioComponent } from './components/glossario/glossario.component';
import { HeroComponent } from './components/hero/hero.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjetoComponent } from './components/projeto/projeto.component';
import { ResistenciaComponent } from './components/resistencia/resistencia.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { SaibaMaisComponent } from './components/saiba-mais/saiba-mais.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ProjetoComponent,
    HistoriaComponent,
    ResistenciaComponent,
    EntrevistaComponent,
    AulaComponent,
    GlossarioComponent,
    SaibaMaisComponent,
    RodapeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { }