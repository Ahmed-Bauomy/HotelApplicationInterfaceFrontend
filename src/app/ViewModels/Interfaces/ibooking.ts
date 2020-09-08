import { IApplicationUser } from './iapplication-user';
import { IRoom } from './iroom';
export interface IBooking {
  BookingId:string;
  StartDate:Date;
  EndDate:Date;
  RoomId:number;
  UserId:string;
  NumberOfPersons:number;
  BookingApproved:Boolean;
  Room:IRoom;
  ApplicationUser:IApplicationUser;  
}
