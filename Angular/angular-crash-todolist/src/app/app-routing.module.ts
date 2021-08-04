import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LogPopupComponent } from './components/log-popup/log-popup.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { SnakeComponent } from './components/snake/snake.component';
import { SnakedComponent } from './components/snaked/snaked.component';
import {TodosComponent} from './components/todos/todos.component'
const routes: Routes = [
  {path:'tic-tac-toe',component:SnakeComponent},
  {path:'scheduler',component:TodosComponent},
  {path:'login',component:LogPopupComponent},
  {path:'snake',component:SnakedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
