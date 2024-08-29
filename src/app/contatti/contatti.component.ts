import { Component } from '@angular/core';
import { ModuloContattoComponent } from '../components/modulo-contatto/modulo-contatto.component';

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [ModuloContattoComponent],
  templateUrl: './contatti.component.html',
})
export class ContattiComponent {}
