import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  operationDate = ''
  userName = ''
  JIRAID = ''
  JIRAsItems: any = []
  reviewer: string = ''
  reviewers: string[] = ['Xiaohang', 'Charles', 'David', 'Chris', 'Taolue', 'Jeffers', 'Alice']

  constructor(public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      console.log(param.get('account'))
      this.userName = String(param.get('account'))
    })
    let str = localStorage.getItem(this.userName)
    if (str) {
      // console.log(JSON.parse(str))
      this.JIRAsItems = JSON.parse(str)
    }
  }

  openDialog () {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        reviewer: this.reviewer,
        reviewers: this.reviewers,
        JIRAID: this.JIRAID,
        JIRAsItems: this.JIRAsItems,
        userName: this.userName,
        operationDate: this.operationDate
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    })
  }

  delete (i: any) {
    this.JIRAsItems.splice(i, 1)
    localStorage.setItem(this.userName, JSON.stringify(this.JIRAsItems))
  }
}
