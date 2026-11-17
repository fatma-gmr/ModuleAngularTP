import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ActiviteService } from '../services/activite.service';

@Component({
  selector: 'app-consult-activite',
  imports: [FormsModule, RouterLink],
  templateUrl: './consult-activite.html',
  styleUrl: './consult-activite.scss',
})
export class ConsultActivite {
  readonly id: string | null;
  readonly secondId: string | null;
  readonly index: number | null;
  editMode = false;
  editedTitle = '';

  constructor(
    route: ActivatedRoute,
    readonly activiteService: ActiviteService,
    private readonly router: Router,
  ) {
    this.id = route.snapshot.paramMap.get('id');
    this.secondId = route.snapshot.paramMap.get('secondId');
    this.index = this.id !== null && /^\d+$/.test(this.id) ? Number(this.id) : null;
    this.editedTitle = this.activite ?? '';
  }

  get activite(): string | null {
    if (this.index === null) return null;
    return this.activiteService.objectifs[this.index] ?? null;
  }

  modifier(): void {
    if (this.activite !== null) {
      this.editedTitle = this.activite;
      this.editMode = true;
    }
  }

  sauvegarder(): void {
    if (this.index === null || !this.editedTitle.trim()) return;
    this.activiteService.updateItem(this.index, this.editedTitle);
    this.editMode = false;
  }

  supprimeElem(): void {
    if (this.index === null || this.activite === null) return;
    this.activiteService.removeItem(this.index);
    void this.router.navigate(['/']);
  }
}
