import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacesHomeComponent } from './espaces-home.component';

describe('EspacesHomeComponent', () => {
  let component: EspacesHomeComponent;
  let fixture: ComponentFixture<EspacesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
