import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo'
import {TodoService} from '../../service/todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
 
  todos!:Todo[];
  

  constructor(private todoService?:TodoService) {
 
   }

  ngOnInit():void{
    this.todoService?.getTodos().subscribe(k=>
      this.todos=k
      );
  }
  deleteTodoFun(todo:Todo){
    console.log("delete me cocksucka!")
    console.log(this.todos=this.todos?.filter(t=>t.id!==todo.id))
    this.todoService?.deleteTodoSer(todo).subscribe()
  }
 addTodoFun(todo:Todo){
   this.todoService?.addTodoSer(todo).subscribe(t=>this.todos?.push(todo));
 }
drop(e:CdkDragDrop<any []>){
  console.log("Container Data: "+e.container.data);
  console.log("PrevIndex: "+e.previousIndex);
  console.log("CurrentIndex: "+e.currentIndex);
  let proba=this.todos;
 moveItemInArray(proba,e.previousIndex,e.currentIndex)
}

}
