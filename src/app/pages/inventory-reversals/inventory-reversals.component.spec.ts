import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryReversalsComponent } from './inventory-reversals.component';

describe('InventoryReversalsComponent', () => {
  let component: InventoryReversalsComponent;
  let fixture: ComponentFixture<InventoryReversalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InventoryReversalsComponent]
    });
    fixture = TestBed.createComponent(InventoryReversalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
