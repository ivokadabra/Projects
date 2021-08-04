import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SnakeComponent } from './components/snake/snake.component';
import { SquereComponent } from './components/snake/squere/squere.component';
import { BoardComponent } from './components/snake/board/board.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
//import { environment } from '../environments/environment';
import { SnakedComponent } from './components/snaked/snaked.component';
import { LogPopupComponent } from './components/log-popup/log-popup.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { TodoService } from './service/todo.service';
import { AuthService } from './service/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    NavbarComponent,
    SnakeComponent,
    SquereComponent,
    BoardComponent,
    LoginComponent,
    SnakedComponent,
    LogPopupComponent,

    
    
   
  ],
 

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    DragDropModule,
    ReactiveFormsModule
    
    
  ],
  providers: [AuthService,AngularFireAuth],
  bootstrap: [AppComponent],
 
  entryComponents:[LoginComponent]
})
export class AppModule { }
