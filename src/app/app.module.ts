import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

/*Components*/
import { AppComponent } from './app.component';

/*Modules*/
import { TextMaskModule } from 'angular2-text-mask';

/*Services*/
import { CrudService } from './shared/services/crud.service';
import { OutsidersService } from './shared/services/outsiders.service';

/**
 * Validators
 */
import { MyValidators } from './shared/validators/my-validators'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MdNativeDateModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  providers: [
    CrudService,
    MyValidators,
    OutsidersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
