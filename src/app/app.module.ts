import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwModule } from './sw/sw.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SwModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
