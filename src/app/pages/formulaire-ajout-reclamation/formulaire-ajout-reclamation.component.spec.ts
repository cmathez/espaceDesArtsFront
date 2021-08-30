import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAjoutReclamationComponent } from './formulaire-ajout-reclamation.component';

describe('FormulaireAjoutReclamationComponent', () => {
  let component: FormulaireAjoutReclamationComponent;
  let fixture: ComponentFixture<FormulaireAjoutReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireAjoutReclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireAjoutReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
