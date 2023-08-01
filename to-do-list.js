let todoList = [];

function addTodo() {
    let todoRow = document.getElementById('js-input');
    let todoValue = todoRow.value.trim();
    if (todoValue === '') return;

    todoList.push(todoValue);
    todoRow.value = '';

    // Clear existing todo elements to avoid duplicates when adding new todos
    deleteElementsWithClass('inner-div');

    const outerDiv = document.getElementById('outer-div');

    for (let i = 0; i < todoList.length; i++) {
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('inner-div');

        const todoText = document.createElement('span');
        todoText.classList.add('todo-text');

        const todoDelete = document.createElement('button');
        todoDelete.classList.add('todo-delete');
        todoDelete.textContent = 'X';

        const todoDone = document.createElement('input');
        todoDone.classList.add('todo-done');
        todoDone.type = 'checkbox';

        const todoDate = document.createElement('input');
        todoDate.classList.add('todo-date');
        todoDate.type = 'date';

        const todoTime = document.createElement('input');
        todoTime.classList.add('todo-time');
        todoTime.type = 'time';


        let todo = todoList[i];
        todoText.textContent = todo;

        todoDelete.addEventListener('click', function() {
            todoList.splice(i, 1);
            outerDiv.removeChild(innerDiv); 
        });

        todoDone.addEventListener('click', function() {
            if (todoDone.checked) {
                todoText.style.textDecoration = 'line-through';
            } else {
                todoText.style.textDecoration = 'none';
            }
        });

        innerDiv.appendChild(todoDone);
        innerDiv.appendChild(todoText);
        innerDiv.appendChild(todoDate);
        innerDiv.appendChild(todoTime);
        innerDiv.appendChild(todoDelete);
        outerDiv.appendChild(innerDiv);
    }
}

function clearList() {
    todoList = [];
    deleteElementsWithClass(`inner-div`);
  }  

function deleteElementsWithClass(className) {
    const elementsToDelete = document.querySelectorAll(`.${className}`);
  
    for (let i = 0; i < elementsToDelete.length; i++) {
      elementsToDelete[i].remove();
    }
}
  
  
