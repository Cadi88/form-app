import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { NoNumberDirective } from './no-number.directive';

@NgModule({
  declarations: [AppComponent, MyFormComponent, NoNumberDirective],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
