import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  nbItems: number = 4;
  btnText: string = "Envoyer";
  objectifText: string = "";
  objectifs: string[] = [];

  constructor(private monRouteur: Router) {}

  ajoutItem() {
    const objectif = this.objectifText.trim();
    if (!objectif) return;
    this.objectifs.push(objectif);
    this.objectifText = '';
    this.nbItems++;
    setTimeout(() => this.monRouteur.navigate(['/about']), 1000);
  }

  ngOnInit() {
    this.nbItems = this.objectifs.length;
  }
}
