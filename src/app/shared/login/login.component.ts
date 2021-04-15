import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  demoForm:any;
  username:string='';

  constructor(private fb : FormBuilder,private router:Router) { 

    this.demoForm = FormGroup;
    this.demoForm = fb.group({
      user : [{value:"",disabled:false},[Validators.required,Validators.minLength(4)]],
      pass : [{value:"",disabled:false},[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]]
    })

  }

  ngOnInit(): void {
  }

  login() {
    this.username=this.demoForm.value.user;
    if(this.demoForm.invalid) {
      return;
    }
    localStorage.setItem('uname',this.username)
    console.log(this.username);
    console.log(this.demoForm.value.pass);
    this.router.navigate(["dashboard"]);
  }

}