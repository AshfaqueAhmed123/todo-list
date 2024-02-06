const input = document.getElementById("input");
const btn = document.getElementById('add-btn')
const todosContainer = document.getElementById('todos-container');
let todos = document.querySelectorAll('li');

function addTodo() {
    let li = document.createElement('li');
    li.setAttribute('class', 'flex items-center justify-between border-b border-gray-300 py-2');
    let todoContent = input.value;
    li.innerHTML =
        `<span class="text-gray-800">${todoContent}</span>
    <div class="flex items-center">
        <button class="text-gray-600 hover:text-blue-500 mr-2"onclick="editTodo(this)">Edit</button>
        <button class="text-gray-600 hover:text-red-500" onclick="deleteTodo(this)">Delete</button>
    </div>
    `;
    todosContainer.appendChild(li)
}

function saveTodotoLocalStorage() {
    let todos = todosContainer.innerHTML;
    localStorage.setItem('todos', todos);
}

function getTodosfromLocalStorage() {
    let todos = localStorage.getItem('todos');
    todosContainer.innerHTML = todos;
}

function editTodo(e) {
    let content = e.parentElement.parentElement.firstElementChild.innerHTML;
    deleteTodo(e);
    input.value = content;
}

function deleteTodo(e) {
    e.parentElement.parentElement.remove();
    saveTodotoLocalStorage();
}

btn.onclick = () => {
    if (input.value != '') {
        addTodo();
        input.value = '';
        saveTodotoLocalStorage();
        return
    }
    alert("can not add empty todo!!")
}

getTodosfromLocalStorage();