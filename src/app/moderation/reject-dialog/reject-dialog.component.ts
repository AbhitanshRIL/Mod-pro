import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-reject-dialog',
  templateUrl: './reject-dialog.component.html',
  styleUrls: ['./reject-dialog.component.css'],
  standalone:true,
  imports: [
    MatButtonModule
  ]
})
export class RejectDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RejectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  
  onCancel(): void {
    this.dialogRef.close();
  }

}
