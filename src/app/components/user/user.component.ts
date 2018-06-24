import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<any>;
  constructor(private userService: UserService) { }

  ngOnInit() {
      this.userService.getAll().subscribe(data => {
          this.users = data;
      });
  }

  onClick() {
    this.userService.changeUsername('ck1232');
    this.userService.getAll().subscribe(data => {
      this.users = data;
  });
  }

}
