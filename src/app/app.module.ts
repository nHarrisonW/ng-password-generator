import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { HerocompComponent } from './herocomp/herocomp.component';
import { FootercompComponent } from './footercomp/footercomp.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    NewpasswordComponent,
    HerocompComponent,
    FootercompComponent
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
