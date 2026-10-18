import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LINKS_NAV } from '../../data/conteudo';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  links = LINKS_NAV;

}