import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversalTableComponent } from './reversal-table.component';

describe('ReversalTableComponent', () => {
  let component: ReversalTableComponent;
  let fixture: ComponentFixture<ReversalTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReversalTableComponent]
    });
    fixture = TestBed.createComponent(ReversalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
