import { Component, OnInit } from '@angular/core';
// import service
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // inject service into constructor
  constructor(private userService: UserService) {
    // call service method
    console.log(this.userService.test());
  }

  ngOnInit(): void {
  }

}
