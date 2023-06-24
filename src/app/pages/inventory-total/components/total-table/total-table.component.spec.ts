import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalTableComponent } from './total-table.component';

describe('TotalTableComponent', () => {
  let component: TotalTableComponent;
  let fixture: ComponentFixture<TotalTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TotalTableComponent]
    });
    fixture = TestBed.createComponent(TotalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
