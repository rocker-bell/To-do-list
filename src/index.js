import _ from 'lodash';
import './style.css';

let ToDo = [
    {
        Description: "walk the dog",
        completed: false,
        number:0
    },
    {
        Description: "assignement work",
        completed: false,
        number:1
    }

];

function RenderToDo(todo) {
    const list = document.querySelector('todos-list');
    const TodoContainer =  document.createElement('li');
    const Checked = todo.completed ? 'done' : '';
    TodoContainer.setAttribute('class', `todo-item ${Checked}`);
    TodoContainer.setAttribute('data-index-number', todo.number);
    TodoContainer.innerHTML = `
    <div class="left flex">
      <input class="check" id="${todo.number}" type="checkbox"/>
      <label for="${todo.number}" class="tick js-tick"></label>
      <span>${todo.Description}</span>
    </div>
    `
    list.appendChild(TodoContainer);
}

function AddToDo(Description) {
    const todo = {
        Description,
        completed: false,
        number: ToDo.length,
    };
    ToDo.push(todo);
    RenderToDo(todo);
}

