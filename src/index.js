import _ from 'lodash';
import './style.css';

let TodoCollection = [
    {
        Description = "walk the dog",
        status = false,
        index = 0,

    },
    {
        Description = "assignement work",
        status = false,
        index = 1,

    }
]

console.log('1')

function ShowToDo(TodoCollection) {
        console.log('sss')
        TodoCollection.forEach((todo) => {
        const ToDolistLibrairy = document.getElementById("todos-list");
        const ToDoContainer = document.createElement('li');
        ToDoContainer.setAttribute('id', 'todo-item')
        const checkbox = document.createElement('input');
        const checkstatus = todo.status ? true : false;
        const ToDo = document.createElement('div');
        ToDo.setAttribute('todo-item-container');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', todo.index);
        const ToDoDescritpion = document.createElement('p');
        ToDoDescritpion.innerHTML = todo.Description;
        const button = document.createElement('button');
        button.setAttribute('id', `remove-btn ${checkstatus}`);
        button.innerHTML = 'Remove';
        ToDoContainer.appendChild(ToDo).appendChild(checkbox).appendChild(ToDoDescritpion).appendChild(button);
        ToDolistLibrairy.appendChild(ToDoContainer);
        console.log('fff')
    
    })
    console.log('fff')
}

function AddToDo(Description) {
    const todo = {
        Description,
        status = false,
        index = TodoCollection.length
    }
    TodoCollection.push(todo);
    ShowToDo(TodoCollection);
}

const AddButton = document.getElementById('Add-btn')
AddButton.addEventListener('click', (event) => AddToDo()
)



