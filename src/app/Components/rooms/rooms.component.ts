import { IRoom } from 'src/app/ViewModels/Interfaces/iroom';
import { BookingInfo } from './../../ViewModels/Interfaces/booking-info';
import { RoomsService } from 'src/app/Services/rooms.service';
import { IBranch } from './../../ViewModels/Interfaces/ibranch';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  Loading:boolean;
  Id:number;
  message:string;
  bookingInfo:BookingInfo;
  availableRooms:IRoom[];
 constructor(private _RoomService: RoomsService,private _router:Router,private _activatedRout:ActivatedRoute) {
            this.bookingInfo={
              StartDate:null,
              EndDate:null,
              BranchId:null
            } 
            this.availableRooms=[]; 
  }

 ngOnInit(): void {
  this.Id = this._activatedRout.snapshot.params["Id"];
 }
  checkAvailableRooms(){
    this.bookingInfo.BranchId=this.Id;
    this.Loading=true;
    this._RoomService.getAvailableRooms(this.bookingInfo).subscribe(
    (data)=>{
      this.Loading=false;
      this.availableRooms=data;
      this.message="this Branch has no rooms yet";
    },
    (err)=>{
     this.Loading=false;
     //this._router.navigate(["/Error"]);
    }
  );
  }
}
