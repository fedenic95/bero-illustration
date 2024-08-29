import { Component } from '@angular/core';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { SectionPortfolioComponent } from '../components/section-portfolio/section-portfolio.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CarouselComponent, SectionPortfolioComponent],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {}
