import { Component, computed, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { Todo } from './interfaces/todo'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '7. Signals';

  count = signal<number>(0);
  todos = signal<Todo[]>([]);
  newTodoText = signal<string>('');

  total = computed(() => this.todos().length);

  constructor() {
    effect(() => {
      const even = this.todos().length % 2 == 0;
      console.log(`Items are ${even ? 'Even' : 'Odd'}`);
      // we can use it to call apis as well
    })
  }

  ngOnInit() {
    console.log(this.count());
  }

  handleInput(event: Event) {
    const input = event?.target as HTMLInputElement;
    this.newTodoText.set(input?.value);
  }

  addTodo() {
    if(this.newTodoText().trim().length > 0) {
      const newTodo: Todo = {
        id: Date.now(),
        text: this.newTodoText(),
        done: false
      }
      this.todos.set([...this.todos(), newTodo]);
      this.newTodoText.set('');
    }
  }

  deleteTodo(id: number) {
    const updatedTodos = this.todos().filter((todo) => todo.id !== id);
    this.todos.set(updatedTodos);

  }

}
