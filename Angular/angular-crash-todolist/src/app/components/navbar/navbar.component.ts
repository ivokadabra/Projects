import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
   logger!:boolean

  constructor(public dialog: MatDialog,public auth: AuthService) {

  }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  getter():boolean{

    this.logger= this.auth.logged;
    console.log("Logger:"+ this.logger);
    return this.logger;
  }
  
}
