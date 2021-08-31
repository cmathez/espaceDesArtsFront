import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeExpositionsArtisteComponent } from './liste-expositions-artiste.component';

describe('ListeExpositionsArtisteComponent', () => {
  let component: ListeExpositionsArtisteComponent;
  let fixture: ComponentFixture<ListeExpositionsArtisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeExpositionsArtisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeExpositionsArtisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
