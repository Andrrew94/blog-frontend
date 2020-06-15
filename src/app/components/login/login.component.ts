import { Component, OnInit } from '@angular/core';
import {TestService} from '../../services/test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private test: TestService) { }

  ngOnInit() {
    this.test.test();
  }

}
