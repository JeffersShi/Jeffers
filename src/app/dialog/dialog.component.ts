import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HomeComponent,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  random () {
    this.data.reviewer = this.data.reviewers[Math.floor(Math.random() * this.data.reviewers.length)]
  }
  create () {
    this.data.JIRAsItems.push({
      operationDate: this.data.operationDate,
      JIRAItemID: this.data.JIRAID,
      Reviewer: this.data.reviewer
    })
    localStorage.setItem(this.data.userName, JSON.stringify(this.data.JIRAsItems))
    this.snackBar.open(`Congratulation! ${this.data.reviewer} was chosed as the reviewer of PRSM-${this.data.JIRAID} !`, 'OK', {
      verticalPosition: 'top',
      duration: 3000
    })
    this.dialogRef.close({
      JIRAID: this.data.JIRAID,
      reviewer: this.data.reviewer
    })
  }
}
