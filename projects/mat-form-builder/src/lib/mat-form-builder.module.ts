import {NgModule} from '@angular/core';
import {FormBuilderComponent} from "./form-builder/form-builder.component";
import {BrowserModule} from '@angular/platform-browser'
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatTableModule} from "@angular/material/table";
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    FormBuilderComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatTableModule,
    MatMenuModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatNativeDateModule,
    HttpClientModule,
    BrowserModule
  ],
  exports: [
    FormBuilderComponent
  ]
})
export class MatFormBuilderModule {
}
