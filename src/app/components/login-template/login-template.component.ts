import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.css']
})
export class LoginTemplateComponent implements OnInit {
  name = 'Janice';
  telephone = 123;
  @Input()data: Array<any>;
  names: Array<string> = ['a', 'b'];
  constructor() { }

  ngOnInit() {
  }

}
