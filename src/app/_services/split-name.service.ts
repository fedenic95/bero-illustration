import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SplitNameService {
  constructor() {}

  splitName(name: string) {
    let nameModificato = name;
    if (name.includes('-')) {
      nameModificato = name.split('-').join(' ');
    }
    nameModificato = nameModificato.slice(0, -4);

    return nameModificato;
  }
}
