import { RoomType } from './room-type.enum';
import { IBranch } from './ibranch';
import { IBooking } from './ibooking';
export interface IRoom {
    RoomId:number;
    Description:string;
    PriceForNight:number; 
    Rate:number; 
    RoomType:RoomType; 
    NumberOfPersons:number;
    BranchId:number;
    RoomImagePath:string; 
    Bookings:IBooking[];
    Branch :IBranch;
}
