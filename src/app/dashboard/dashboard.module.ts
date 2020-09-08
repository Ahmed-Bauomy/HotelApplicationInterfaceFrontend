import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../SharedComponents/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BranchesComponent } from './branches/branches.component';
import { BookingComponent } from './booking/booking.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    BranchesComponent,
    BookingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    DashboardComponent,
    SidebarComponent
  ]
})
export class DashboardModule { }
