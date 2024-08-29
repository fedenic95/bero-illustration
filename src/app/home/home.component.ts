import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { ImageService } from '../_services/image.service';
import { ModuloContattoComponent } from '../components/modulo-contatto/modulo-contatto.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, ModuloContattoComponent, RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
