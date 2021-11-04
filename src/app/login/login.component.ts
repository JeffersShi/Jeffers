import { Component, OnInit } from '@angular/core';

// 导入路由提供的服务
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // template: `
  //   <input type="text" [(ngModel)]="account" >
  // `,
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  account = ''
  password = ''
  login = () => {
    if (this.account !== '' && this.password !== '') {
      this.router.navigate(['/home/' + this.account])
    }
  }
}
