import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaFormularioComponent } from './venda-formulario.component';

describe('VendaFormularioComponent', () => {
  let component: VendaFormularioComponent;
  let fixture: ComponentFixture<VendaFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VendaFormularioComponent]
    });
    fixture = TestBed.createComponent(VendaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
