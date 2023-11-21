import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  LogInForm = new FormGroup({
    nick: new FormControl('',
      [Validators.required,],
    ),
    password: new FormControl('',
      [Validators.required]),

  })

  constructor() { }

  ngOnInit() {
  }

}
