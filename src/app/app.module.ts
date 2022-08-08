import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatComponent } from './components/cat/cat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterBreedsPipe } from './pipes/filter-breeds.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    FilterBreedsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
