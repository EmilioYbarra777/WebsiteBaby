const submitForm = document.querySelector('.add');
const addButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todos');

// Hide the list initially to avoid flicker
todoList.style.opacity = '0';
todoList.style.transition = 'opacity 0.5s ease-in-out';

// Load todos from local storage and render them
const loadTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todoList.innerHTML = ''; // Clear the existing list
    todos.forEach(todo => {
        generateTemplate(todo.text, todo.checked);
    });
    todoList.style.opacity = '1'; // Fade in the list
};

// Save current todos to local storage
const saveTodos = () => {
    const todos = Array.from(todoList.querySelectorAll('li')).map(li => {
        return {
            text: li.querySelector('label').textContent.trim(),
            checked: li.querySelector('input').checked
        };
    });
    localStorage.setItem('todos', JSON.stringify(todos));
};

// Generate HTML template for a todo item
const generateTemplate = (todo, checked = false) => {
    const listLength = document.querySelectorAll('.todos li').length;
    const html = `<li>
                    <input type="checkbox" id="todo_${listLength}" ${checked ? 'checked' : ''} />
                    <label for="todo_${listLength}">
                        <span class="check"></span>${todo}
                    </label>
                    <i class="far fa-trash-alt delete"></i>
                  </li>`;
    todoList.innerHTML += html;
};

// Add a new todo item
function addTodos(e) {
    e.preventDefault();
    const todo = submitForm.add.value.trim(); // Trim extra space in input
    if (todo.length) { // Check if the input is not empty
        generateTemplate(todo);
        submitForm.reset();
        saveTodos(); // Save todos to local storage
    }
}

// Add event listeners for adding todos
submitForm.addEventListener('submit', addTodos);
addButton.addEventListener('click', addTodos);

// Delete a todo item
function deleteTodos(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        saveTodos(); // Save todos to local storage
    }
}

// Add event listener for deleting todos
todoList.addEventListener('click', deleteTodos);

// Load todos when the page loads
window.addEventListener('load', loadTodos);
