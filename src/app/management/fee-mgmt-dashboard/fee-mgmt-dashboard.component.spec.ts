import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeMgmtDashboardComponent } from './fee-mgmt-dashboard.component';

describe('FeeMgmtDashboardComponent', () => {
  let component: FeeMgmtDashboardComponent;
  let fixture: ComponentFixture<FeeMgmtDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeMgmtDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeMgmtDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
