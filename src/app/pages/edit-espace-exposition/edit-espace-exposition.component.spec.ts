import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEspaceExpositionComponent } from './edit-espace-exposition.component';

describe('EditEspaceExpositionComponent', () => {
  let component: EditEspaceExpositionComponent;
  let fixture: ComponentFixture<EditEspaceExpositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEspaceExpositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEspaceExpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
