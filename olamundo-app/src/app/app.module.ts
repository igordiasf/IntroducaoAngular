import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import { CristoComponent } from './cristo/cristo.component';
import { LajinhaComponent } from './lajinha/lajinha.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    CristoComponent,
    LajinhaComponent,
    PrincipalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent, TopoComponent, RodapeComponent,PrincipalComponent]
})
export class AppModule { }
