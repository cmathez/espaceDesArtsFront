import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceExpositionArtisteComponent } from './espace-exposition-artiste.component';

describe('EspaceExpositionArtisteComponent', () => {
  let component: EspaceExpositionArtisteComponent;
  let fixture: ComponentFixture<EspaceExpositionArtisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceExpositionArtisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceExpositionArtisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
