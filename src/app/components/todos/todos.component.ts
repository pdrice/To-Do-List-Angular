import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

todos:Todo[];
inputTodo:string = '';

  constructor() { }

  ngOnInit(): void {
    
    this.todos = [
      {
    content:'',
    completed:false
    },
    {
      content:'',
      completed:true
      },
    ]
  }


  toggleDone(id){
    this.todos.map((v,i)=>{
      if (i===id) v.completed = !v.completed;
      return v;
    })

    
    
  }

  onDeleteTodo(id:number){

      this.todos = this.todos.filter((v,i)=>i !==id);
  
    }

    addTodo(){
      this.todos.push({
        content: this.inputTodo,
        completed:false
      })

      this.inputTodo = ''
    }

  
}