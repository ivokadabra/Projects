import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user?: Observable<firebase.User>;
  logged:boolean=false;

  constructor(private firebase: AngularFireAuth) { 
    //this.user=firebase.authState;

  }


  signUp(email:string,password:string){
   this.firebase.auth.createUserWithEmailAndPassword(email,password)
  .then(p=>console.log("Success"));
   
   }
   logIn(email:string,password:string){
     console.log(email)
     console.log(password)
     this.firebase.auth.signInWithEmailAndPassword(email,password).then(p=>console.log("Success")).then(p=>this.getLoggen())
    

  
   
   }
   
   logOut(){
     this.firebase.auth.signOut();
   }
   
   getLoggen():void{
    
     this.logged=true;
     console.log("In get Logged:"+this.logged)
   }


}
