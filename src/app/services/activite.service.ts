import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ActiviteService {
  readonly objectifs: string[] = [];

  addItem(titre: string): void {
    const titreNettoye = titre.trim();
    if (titreNettoye) this.objectifs.push(titreNettoye);
  }

  removeItem(index: number): void {
    if (Number.isInteger(index) && index >= 0 && index < this.objectifs.length) {
      this.objectifs.splice(index, 1);
    }
  }

  updateItem(index: number, titre: string): void {
    const titreNettoye = titre.trim();
    if (Number.isInteger(index) && index >= 0 && index < this.objectifs.length && titreNettoye) {
      this.objectifs[index] = titreNettoye;
    }
  }
}
