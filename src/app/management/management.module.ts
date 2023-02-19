import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentMgmtDashboardComponent } from './student-mgmt-dashboard/student-mgmt-dashboard.component';
import { FeeMgmtDashboardComponent } from './fee-mgmt-dashboard/fee-mgmt-dashboard.component';



@NgModule({
  declarations: [
    StudentMgmtDashboardComponent,
    FeeMgmtDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ManagementModule { }
