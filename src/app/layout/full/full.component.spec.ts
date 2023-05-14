import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullComponent } from './full.component';

describe('DashboardComponent', () => {
  let component: FullComponent;
  let fixture: ComponentFixture<FullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FullComponent]
    });
    fixture = TestBed.createComponent(FullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
