import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    DetalleComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule, BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
