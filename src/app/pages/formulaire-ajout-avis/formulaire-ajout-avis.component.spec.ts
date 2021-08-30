import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAjoutAvisComponent } from './formulaire-ajout-avis.component';

describe('FormulaireAjoutAvisComponent', () => {
  let component: FormulaireAjoutAvisComponent;
  let fixture: ComponentFixture<FormulaireAjoutAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireAjoutAvisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireAjoutAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
