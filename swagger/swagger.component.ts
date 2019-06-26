import { Component, OnInit } from '@angular/core';
import { SwaggerService } from '../swagger.service';
import { MatTableDataSource } from '@angular/material';

  export interface CampaignInfo {
      deptGroups: string;
      fileType: string;
      filename: string;
      globalGroups: string;
      header: number;
      headerColumn: string;
      id: number;
      invalidcount: number;
      mobilenoColumn: string;
      sheetname: string;
      userGroups: string;
      validcount: number;
  }

  export interface Campaign {
      actualStarttime: string;
      actualfilename: string;
      campDesc: string;
      campId: number;
      campMode: number;
      campName: string;
      campStartTime: string;
      campType: number;
      campaignInfo: CampaignInfo;
      charCount: number;
      credits: number;
      dndStatus: number;
      language: number;
      message: string;
      priority: number;
      scheduleType: number;
      senderId: number;
      sourceType: number;
      status: number;
      timeDiff: number;
  }

  export interface RootObject {
      campaigns: Campaign[];
  }


@Component({
  selector: 'app-swagger',
  templateUrl: './swagger.component.html',
  styleUrls: ['./swagger.component.scss']
})
export class SwaggerComponent implements OnInit {
  public user:Campaign[];
  displayedColumns: string[]=['status','campName','message']
  dataSource: any;

  constructor( private swag:SwaggerService) {
    this.getdata();
  }
  getdata(){
    this.swag.data().subscribe(
      res=>{
        this.user=res['campaigns'];
        this.dataSource = new MatTableDataSource(this.user)
      }
    )
  
   }

  ngOnInit() {
  }

}
