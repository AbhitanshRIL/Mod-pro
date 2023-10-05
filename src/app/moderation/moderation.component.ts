import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApproveDialogComponent } from './approve-dialog/approve-dialog.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';

@Component({
  selector: 'app-moderation',
  templateUrl: './moderation.component.html',
  styleUrls: ['./moderation.component.css']
})


export class ModerationComponent{

  // animal:string;
  // name:string;

  POA:string = '../../assets/POA.jpg';
  POI:string= '../../assets/POI.jpg';
  Doc1:string = '../../assets/image1.jpg';
  selectedImage =this.POA;
  imageOptions: string[] = [this.POA,this.POI,this.Doc1]; // Replace with your image URLs
  imageDetails: { [key:string]: string } = {
    [this.POA] : 'Address Proof',
    [this.POI] : 'Identity Proof',
    [this.Doc1] : 'Document'
  };

  panelOpenState = false;
  panelOpenState1 = false;

  ngOnInit() {
    console.log("testing by harsh");
    console.log(this.selectedImage);
  }
   
  constructor(public dialog: MatDialog) {}
  
  openApproveDialog(): void {
    let dialogRef = this.dialog.open(ApproveDialogComponent);
  }

  openUpdateDialog(): void {
    let dialogRef = this.dialog.open(UpdateDialogComponent);
  }

}
