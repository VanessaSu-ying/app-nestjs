import { Component, OnInit } from '@angular/core';

import { User} from '../../interfaces/users';
import { UsersService} from '../../services/users.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: User = {
    username : "",
    password: "",

  }

  constructor(private userService: UsersService, private router:Router) { }

  ngOnInit() {
  }

  submitUser(){
    this.userService.createUser(this.user)
    .subscribe(
      res => {
        console.log(res);
        //this.router.navigate(['user/id']);
      },
      err => console.log(err)
    )
  }

}
