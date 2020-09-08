import { IRoom } from './iroom';
export interface IBranch {
   BranchId:number;
   Name:string;
   Location:string;
   BranchImagePath:string;
   Rooms:IRoom[];
}
