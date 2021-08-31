import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAjoutReservationComponent } from './formulaire-ajout-reservation.component';

describe('FormulaireAjoutReservationComponent', () => {
  let component: FormulaireAjoutReservationComponent;
  let fixture: ComponentFixture<FormulaireAjoutReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireAjoutReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireAjoutReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
