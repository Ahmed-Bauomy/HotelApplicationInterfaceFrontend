import { BaseUrl } from './../../environments/environment';
import { IBranch } from './../ViewModels/Interfaces/ibranch';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private Http:HttpClient) { }
  
  getAllBranches():Observable<IBranch[]>{
   return this.Http.get<IBranch[]>(`${BaseUrl}/api/Branch`);
  }
  getBranch(id:number):Observable<IBranch>{
    return this.Http.get<IBranch>(`${BaseUrl}/api/Branch/${id}`);
  }
}
