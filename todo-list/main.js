const form = document.getElementById("form");
const todoList = document.getElementById('todoList');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
    input.value ='';
})

const todos = JSON.parse(localStorage.getItem("todos"));

if(todos){    
    todos.forEach((todo) => {
        addTodo(todo);
    });
}

function addTodo(todo){
    const text = todo ? todo.text : input.value
    if(text){
        const li = document.createElement('li');
        if(todo && todo.selected){
            li.classList.add("selected")
        }
        li.innerText= text;
        li.addEventListener("click", () => {
            li.classList.toggle("selected");
            save()
        });
        li.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            li.remove();
            save()
        });
        todoList.appendChild(li);   
        save()
    }
}

function save(){
    const todos = document.querySelectorAll("li");
    const todosMass = [];
    todos.forEach((todo) => {
        todosMass.push({
            text: todo.innerText,
            selected: todo.classList.contains("selected"),
        });
    });
    localStorage.setItem("todos", JSON.stringify(todosMass));
}