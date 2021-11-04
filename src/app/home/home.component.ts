import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(param => {
      console.log(param.get('account'))
      this.account = String(param.get('account'))
    })
  }
  account = '';
  JIRAID = '';
  reviewer: string = '';
  reviewers: string[] = ['Amy', 'Xiaohang', 'Charles', 'David', 'Alice', 'Jack', 'Chris', 'Taolue'];
  random = () => {
    this.reviewer = this.reviewers[Math.floor(Math.random() * this.reviewers.length)]
  };
  determine = () => {
    this.dialog.open(DialogElementsExampleDialog, {
      data: {
        JIRAID: this.JIRAID,
        reviewer: this.reviewer
      }
    })
  };
}
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {JIRAID: string, reviewer: string}) { }
}
