import _ from 'lodash';
function component() {
    const element = document.createElement('div');
  
     // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

let ToDo = [{number: 1, Description: "washe the dishes", completed: false}, {number:2, Description: "programming task", completed: false }, {number: 3, Description: "walk the dog", completed: false}]

console.log(ToDo)

console.log(ToDo[0])

  ToDo = {number: , Description: , completed: }