import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

/*Components*/
import { AppComponent } from './app.component';

/*Modules*/
import { TextMaskModule } from 'angular2-text-mask';

/*Services*/
import { OutsidersService } from './shared/services/outsiders.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  providers: [OutsidersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
