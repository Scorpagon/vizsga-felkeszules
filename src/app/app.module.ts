import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListComponent, RegistrationComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
