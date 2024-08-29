import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ImageService } from '../../_services/image.service';
import { SplitNameService } from '../../_services/split-name.service';
import { OpenImageComponent } from '../../open-image/open-image.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [OpenImageComponent],
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() nomeCarosello!: string;
  carouselSelected!: string;
  numeroCarousel!: number;
  carousel: string[] = [];
  carouselName: string[] = [];
  intervalId: any;
  apriImmagine: boolean = false;
  image: string = '';
  imageName: string = '';

  constructor(
    private imageService: ImageService,
    private splitNameService: SplitNameService
  ) {}

  ngOnInit(): void {
    this.imageService.getImages(this.nomeCarosello).subscribe((images) => {
      this.carousel = images.map(
        (image) => `img/${this.nomeCarosello}/${image}`
      );
      this.carouselName = images.map(
        (image) => `${this.splitNameService.splitName(image)}`
      );
      this.carouselSelected = this.carousel[0];
      this.numeroCarousel = 0;
      this.startAutoSlide();
    });
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.avanti();
    }, 5000); // Change image every 3 seconds
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  avanti() {
    this.numeroCarousel = (this.numeroCarousel + 1) % this.carousel.length;
    this.carouselSelected = this.carousel[this.numeroCarousel];
  }

  indietro() {
    this.numeroCarousel =
      (this.numeroCarousel - 1 + this.carousel.length) % this.carousel.length;
    this.carouselSelected = this.carousel[this.numeroCarousel];
  }

  openImage(image: string, imageName: string) {
    this.apriImmagine = true;
    this.image = image;
    this.imageName = imageName;
  }

  closeImage(e: boolean) {
    this.apriImmagine = false;
    this.image = '';
    this.imageName = '';
    this.startAutoSlide();
  }
}
