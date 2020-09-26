var form = document.getElementById("form");
var todoList = document.getElementById('todoList');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
    input.value ='';
})

var todos = JSON.parse(localStorage.getItem("todos"));

if(todos){    
    todos.forEach((todo) => {
        addTodo(todo);
    });
}

function addTodo(todo){
    var text = todo ? todo.text : input.value
    if(text){
        var li = document.createElement('li');

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
    var todos = document.querySelectorAll("li");

    var todosMass = [];

    todos.forEach((todo) => {
        todosMass.push({
            text: todo.innerText,
            selected: todo.classList.contains("selected"),
        });
    });

    localStorage.setItem("todos", JSON.stringify(todosMass));
}