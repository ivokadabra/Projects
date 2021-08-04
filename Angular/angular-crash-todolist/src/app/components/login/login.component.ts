import { R3UsedDirectiveMetadata } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog'
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


import{UserData} from '../../models/UserData'
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  //loginUserData!: UserData
  //password!:string
  //email!:string
  loginForm!: FormGroup;

  constructor(public auth: AuthService,public dialogRef: MatDialogRef<LoginComponent>,private fb:FormBuilder) {
     


   }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
  }



sign(){
  console.log("signUp")
 const{email,password}=this.loginForm.value;
 console.log(email)
 console.log(password)
 this.auth.signUp(email,password);
 
}

log(){
  console.log("logIn")
  const{email,password}=this.loginForm.value;
  console.log(email)
 console.log(password)
  this.auth.logIn(email,password);
  
}

/*logO(){
  this.auth.logOut();

}*/


/*logIn(){
  //console.log(this.password)
  //console.log(this.email)
  this.loginUserData={
    email:this.email,
    password:this.password
  }
  this.loginServes.loginUser(this.loginUserData).subscribe(res=>console.log(res),err=>console.log(err))
  //console.log(this.loginUserData.password)
  //console.log(this.loginUserData.email)

}*/


}
