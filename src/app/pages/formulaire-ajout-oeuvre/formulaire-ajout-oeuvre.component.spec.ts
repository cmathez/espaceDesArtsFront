import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAjoutOeuvreComponent } from './formulaire-ajout-oeuvre.component';

describe('FormulaireAjoutOeuvreComponent', () => {
  let component: FormulaireAjoutOeuvreComponent;
  let fixture: ComponentFixture<FormulaireAjoutOeuvreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireAjoutOeuvreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireAjoutOeuvreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
