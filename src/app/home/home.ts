import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  imports: [FormsModule],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  objectifText = '';
  readonly btnText = 'Ajouter';

  constructor(
    readonly activiteService: ActiviteService,
    private monRouteur: Router,
  ) {}

  get nbItems(): number {
    return this.activiteService.objectifs.length;
  }

  ajoutItem() {
    if (!this.objectifText.trim()) return;
    this.activiteService.addItem(this.objectifText);
    this.objectifText = '';
    setTimeout(() => this.monRouteur.navigate(['/about']), 1000);
  }

  consulter(index: number): void {
    void this.monRouteur.navigate(['/consultAct', index]);
  }
}
