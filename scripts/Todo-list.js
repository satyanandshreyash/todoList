const todoList = [];

renderTodoList();
function renderTodoList(){
    let todoListHtml = '';

    todoList.forEach((todoObject, index) => {
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html = `
        <div>${name}</div> 
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${index},1);
            renderTodoList();
        " class="delete-btn">Delete</button>
        `;
        todoListHtml += html;
    });
    document.querySelector('.js-todo-list').innerHTML = todoListHtml;
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name =inputElement.value;
    const dueDateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dueDateInputElement.value;
    todoList.push({
        name: name,
        dueDate: dueDate
    });
    inputElement.value = '';
    renderTodoList();
}