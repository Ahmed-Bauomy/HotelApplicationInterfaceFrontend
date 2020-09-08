import { RoomsComponent } from './Components/rooms/rooms.component';
import { ReportPageComponent } from './Components/report-page/report-page.component';
import { BookingComponent } from './dashboard/booking/booking.component';
import { BranchesComponent } from './dashboard/branches/branches.component';
import { RegisterComponent } from './Components/register/register.component';
import { ErrorComponent } from './SharedComponents/error/error.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './SharedComponents/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';


const routes: Routes = [
  {path:"",component:HomeComponent,
   children:[
    {path:"",component:ReportPageComponent},
    {path:"Login",component:LoginComponent},
    {path:"Register",component:RegisterComponent},
    {path:"Rooms/:Id",component:RoomsComponent}
  ]
  },
  {path:"Dashboard",component:DashboardComponent,
  children:[
    {path:"",component:BranchesComponent},
    {path:"Booking",component:BookingComponent}
  ]
  },
  {path:"Error",component:ErrorComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
