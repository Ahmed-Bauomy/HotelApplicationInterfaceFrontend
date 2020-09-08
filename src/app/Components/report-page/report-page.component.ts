import { IBranch } from './../../ViewModels/Interfaces/ibranch';
import { BranchService } from './../../Services/branch.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent implements OnInit {

  Loading:boolean;
  AllBranches: IBranch[];
 constructor(private _BranchService: BranchService,private _router:Router) {

  }

 ngOnInit(): void {
  this.Loading=true;
  this._BranchService.getAllBranches().subscribe(
  (data)=>{
    this.Loading=false;
    this.AllBranches=data;
  },
  (err)=>{
   this.Loading=false;
  this._router.navigate(["/Error"]);
  }
);
 }

}
