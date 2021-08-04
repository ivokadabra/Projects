import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { LoginComponent } from '../login/login.component';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-log-popup',
  templateUrl: './log-popup.component.html',
  styleUrls: ['./log-popup.component.css']
})
export class LogPopupComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  /*constructor(public dialog:MatDialog,private loginObject:LoginComponent,private auth:AuthService) { 
    this.loginObject=new LoginComponent(this.auth);
  }

  ngOnInit(): void {
  }
  
  openDialog(){
    debugger
    this.dialog.open(this.loginObject);
}*/
}
