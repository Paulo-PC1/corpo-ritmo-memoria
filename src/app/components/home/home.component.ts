import { Component } from '@angular/core';

import { AulaComponent } from '../aula/aula.component';
//import { EntrevistaComponent } from '../entrevista/entrevista.component';
import { GlossarioComponent } from '../glossario/glossario.component';
import { HeroComponent } from '../hero/hero.component';
import { HistoriaComponent } from '../historia/historia.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProjetoComponent } from '../projeto/projeto.component';
import { ResistenciaComponent } from '../resistencia/resistencia.component';
import { RodapeComponent } from '../rodape/rodape.component';
import { SaibaMaisComponent } from '../saiba-mais/saiba-mais.component';

// Página inicial: é tudo o que antes ficava direto no AppComponent
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ProjetoComponent,
    HistoriaComponent,
    ResistenciaComponent,
    //EntrevistaComponent,
    AulaComponent,
    GlossarioComponent,
    SaibaMaisComponent,
    RodapeComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent { }
