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
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers()
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }


  submitUser(){
    this.userService.createUser(this.user)
    .subscribe(
      res => {
        console.log(res),
        this.router.navigate(['/user/']);
      },
      err => console.log(err)
    )
  }

}
