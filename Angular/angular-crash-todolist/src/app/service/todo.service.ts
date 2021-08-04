import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo} from '../models/Todo';
import { Observable } from 'rxjs';
import { UserData } from '../models/UserData';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

todoURL:string='https://jsonplaceholder.typicode.com/todos';
todoLimit:string='?_limit=5';
loginUrl:string='http://localhost:4200/login';

  constructor(private http:HttpClient) { }

  getTodos(){
   return  this.http.get<Todo[]>(`${this.todoURL}${this.todoLimit}`);

  }

toggleCompleted(todo_item:Todo):Observable<Todo>{
  const url=`${this.todoURL}/${todo_item.id}`;
 return this.http.put(url,todo_item,httpOptions);
}

deleteTodoSer(todo_item:Todo):Observable<any>{
  console.log("delete me cocksucka 2!");
  const url=`${this.todoURL}/${todo_item.id}`;
  return this.http.delete<Todo>(url,httpOptions);
}
addTodoSer(todo_item:Todo){
return this.http.post<Todo>(this.todoURL,todo_item,httpOptions);
}

/*loginUser(user:UserData){
  return this.http.post(this.loginUrl, user,httpOptions);
}*/



}
