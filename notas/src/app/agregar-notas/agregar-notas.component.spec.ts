import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarNotasComponent } from './agregar-notas.component';

describe('AgregarNotasComponent', () => {
  let component: AgregarNotasComponent;
  let fixture: ComponentFixture<AgregarNotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarNotasComponent]
    });
    fixture = TestBed.createComponent(AgregarNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
