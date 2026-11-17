import { TestBed } from '@angular/core/testing';
import { ActiviteService } from './activite.service';

describe('ActiviteService', () => {
  let service: ActiviteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiviteService);
  });

  it('shares and updates the same activities array', () => {
    const sameArray = service.objectifs;
    service.addItem('Lire');
    service.updateItem(0, 'Lire un livre');

    expect(service.objectifs).toBe(sameArray);
    expect(sameArray).toEqual(['Lire un livre']);
  });

  it('removes an activity at its index', () => {
    service.objectifs.push('Lire', 'Coder');

    service.removeItem(0);

    expect(service.objectifs).toEqual(['Coder']);
  });
});
