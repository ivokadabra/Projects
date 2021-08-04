import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
 @Input()
  todo_item!: Todo;
  
 @Output()
  deleteTodo: EventEmitter<Todo>=new EventEmitter();

  constructor(private todoService:TodoService) {

   }

  ngOnInit(): void {
    console.log(this.todo_item.id)
  }
 
//Set Classes
setClasses(){
 let classes={
   "todoo":true,
   'is-completed':this.todo_item.completed
  }
  return classes
}

onCheck(todo_item: any){
todo_item.completed=!todo_item.completed;

this.todoService.toggleCompleted(todo_item).subscribe(todo_item=>
  console.log(todo_item));

}

onDelete(todo_item: any){
  this.deleteTodo.emit(todo_item);
  }


}
