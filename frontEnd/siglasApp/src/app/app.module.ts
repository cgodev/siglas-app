import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreModule } from '@ngrx/store';
import { siglasReducer } from './redux/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SiglasService } from './services/siglas.service';
import { Axios } from 'axios';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ siglas: siglasReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),    
  ],
  providers: [
    SiglasService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
