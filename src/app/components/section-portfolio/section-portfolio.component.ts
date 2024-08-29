import { Component, Input, OnInit } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { SplitNameService } from '../../_services/split-name.service';

@Component({
  selector: 'app-section-portfolio',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './section-portfolio.component.html',
})
export class SectionPortfolioComponent implements OnInit {
  @Input() nomeSezione!: string;
  @Input() paragrafo!: string;

  constructor(public splitNameService: SplitNameService) {}

  paragrafi: string[] = [];
  ngOnInit(): void {
    if (this.paragrafo.includes('oooo')) {
      this.paragrafi = this.splitString(this.paragrafo);
    }
  }
  splitString(input: string): string[] {
    return input.split('oooo');
  }

  splitName(name: string) {
    let nameModificato = name;
    if (name.includes('-')) {
      nameModificato = name.split('-').join(' ');
    }

    return nameModificato;
  }
}
