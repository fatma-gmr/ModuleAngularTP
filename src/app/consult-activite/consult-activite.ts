import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consult-activite',
  templateUrl: './consult-activite.html',
  styleUrl: './consult-activite.scss',
})
export class ConsultActivite {
  readonly id: string | null;
  readonly secondId: string | null;

  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.params['id'] ?? null;
    this.secondId = route.snapshot.params['secondId'] ?? null;
  }
}
