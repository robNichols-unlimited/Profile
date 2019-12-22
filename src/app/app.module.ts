import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ContactRequestComponent } from './contact-request/contact-request.component';

import { ProjectService } from './services/project.service';
import { ModalService } from './services/modal.service';
import { ModalComponent } from './directives/modal.directive';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    NavigationComponent,
    ProjectCardComponent,
    ContactRequestComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProjectService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
