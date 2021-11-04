import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  userName = ''
  nowUserName = ''
  users: any = []

  constructor(private router: Router) { };

  ngOnInit(): void {
    let str: any = localStorage.getItem('users')
    if (str) {
      this.users = JSON.parse(str)
      this.nowUserName = this.users[0]
    }
  };
  
  addUserName () {
    if (this.userName.trim() === '') return
    this.users.push(this.userName)
    localStorage.setItem('users', JSON.stringify(this.users))
    this.nowUserName = this.userName
    this.userName = ''
  };

  Jump () {
    this.router.navigate(['/home/' + this.nowUserName])
  }
}
