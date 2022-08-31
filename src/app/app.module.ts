import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormBuilderModule} from "../../projects/mat-form-builder/src/lib/mat-form-builder.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatFormBuilderModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
