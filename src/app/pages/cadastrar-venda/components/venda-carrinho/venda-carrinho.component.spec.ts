import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaCarrinhoComponent } from './venda-carrinho.component';

describe('VendaCarrinhoComponent', () => {
  let component: VendaCarrinhoComponent;
  let fixture: ComponentFixture<VendaCarrinhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VendaCarrinhoComponent]
    });
    fixture = TestBed.createComponent(VendaCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
