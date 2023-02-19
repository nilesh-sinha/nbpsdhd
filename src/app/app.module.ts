import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { NoticeWindowComponent } from './shared/notice-window/notice-window.component';
import { RootContainerComponent } from './shared/root-container/root-container.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { AboutComponent } from './shared/about/about.component';
import { ContactComponent } from './shared/contact/contact.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ComingSoonComponent } from './shared/coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NoticeWindowComponent,
    RootContainerComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
