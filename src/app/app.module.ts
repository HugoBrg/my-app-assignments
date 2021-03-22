import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AssignmentsListComponent } from './assignments-list/assignments-list.component';
import { CommonModule } from '@angular/common';
import { AssignmentsAddComponent } from './assignments-add/assignments-add.component';
import { MatStepperModule } from '@angular/material/stepper'; 
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AssignmentsListComponent,
    AssignmentsAddComponent
  ],
  imports: [
    MatStepperModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'login-page', component: LoginPageComponent},
      {path: 'assignments-list', component: AssignmentsListComponent},
      {path: 'assignments-add', component: AssignmentsAddComponent},
      {path: '', redirectTo: '/login-page', pathMatch: 'full'},
    ]),
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
