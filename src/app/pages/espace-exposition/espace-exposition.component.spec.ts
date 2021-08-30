import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceExpositionComponent } from './espace-exposition.component';

describe('EspaceExpositionComponent', () => {
  let component: EspaceExpositionComponent;
  let fixture: ComponentFixture<EspaceExpositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceExpositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceExpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
