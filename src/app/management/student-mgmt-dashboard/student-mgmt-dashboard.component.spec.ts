import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMgmtDashboardComponent } from './student-mgmt-dashboard.component';

describe('StudentMgmtDashboardComponent', () => {
  let component: StudentMgmtDashboardComponent;
  let fixture: ComponentFixture<StudentMgmtDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMgmtDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentMgmtDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
