import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';

//Angular Material Imports
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AutoCapitalisationDirective } from './auto-capitalisation.directive';
import { ShowErrorsDirective } from './show-errors.directive';
import { ChildComponent } from './child/child.component';
import { CustomDatePipePipe } from './custom-date-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AutoCapitalisationDirective,
    ShowErrorsDirective,
    ChildComponent,
    CustomDatePipePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
