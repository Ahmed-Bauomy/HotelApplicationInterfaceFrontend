import { BookingInfo } from './../ViewModels/Interfaces/booking-info';
import { BaseUrl } from './../../environments/environment';
import { Observable } from 'rxjs';
import { IRoom } from './../ViewModels/Interfaces/iroom';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
   Http:HttpClient;
  constructor(_http:HttpClient) {
    this.Http=_http;
   }
   getAllRooms():Observable<IRoom[]>{
      return this.Http.get<IRoom[]>(`${BaseUrl}/api/Room`);
   }
   getAvailableRooms(bookingInfo:BookingInfo):Observable<IRoom[]>{
      return this.Http.post<IRoom[]>(`${BaseUrl}/api/AvailableRooms`,bookingInfo);
   }
}
