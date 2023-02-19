import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './shared/about/about.component';
import { ComingSoonComponent } from './shared/coming-soon/coming-soon.component';
import { ContactComponent } from './shared/contact/contact.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { NoticeWindowComponent } from './shared/notice-window/notice-window.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'notification', component: NoticeWindowComponent},
  { path: 'fee-payment', component: ComingSoonComponent},
  { path: '*', redirectTo: 'not-found'},
  { path: 'not-found', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
