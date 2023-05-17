import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTotalComponent } from './inventory-total.component';

describe('InventoryTotalComponent', () => {
  let component: InventoryTotalComponent;
  let fixture: ComponentFixture<InventoryTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InventoryTotalComponent]
    });
    fixture = TestBed.createComponent(InventoryTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
