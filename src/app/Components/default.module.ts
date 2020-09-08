import { RoomsComponent } from './rooms/rooms.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../SharedComponents/shared.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportPageComponent } from './report-page/report-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ReportPageComponent,
    RoomsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ReportPageComponent
  ]
})
export class DefaultModule { }
