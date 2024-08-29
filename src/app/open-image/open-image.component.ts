import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-open-image',
  standalone: true,
  imports: [],
  templateUrl: './open-image.component.html',
})
export class OpenImageComponent {
  @Input() image!: string;
  @Input() imageName!: string;

  @Output() immagineAperta: EventEmitter<boolean> = new EventEmitter();

  chiudi() {
    this.immagineAperta.emit(false);
  }
}
