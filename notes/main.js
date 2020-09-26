document.addEventListener('DOMContentLoaded', function(){
    var addNote = document.getElementById('add');
    addNote.addEventListener('click', function(){
        addNewNote();
    })
    
    var notes = JSON.parse(localStorage.getItem("notes"));  
    if (notes) {
        notes.forEach((note) => {
            addNewNote(note);
        });
    }
    
    function addNewNote(t = ''){
        let rect = document.createElement('div');
        rect.classList.add("note")
    
        rect.innerHTML = `
        <div>
            <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i> edit</button>
            <button class="remove"><i class="fas fa-trash-alt"></i> remove</button>
            </div>
            <textarea class='text ${t ? 'hidden' : ''}'></textarea>
            <p class ='content ${t ? "" : 'hidden'}'></p>
        </div>
        `
        const editBut = rect.querySelector('.edit')
        const remBut = rect.querySelector('.remove')
        const content = rect.querySelector('.content')
        const text = rect.querySelector('textarea')
    
        text.value = t;
        content.innerText= t;
    
        editBut.addEventListener('click', function(){
        content.classList.toggle('hidden')
        text.classList.toggle('hidden')     
        })   
        text.addEventListener('input',function(e){
        var value = e.target.value;  
        content.innerText = value;
        save();
        })
    
        remBut.addEventListener('click', function(){
            rect.remove()
            save();
        })
    
        document.body.appendChild(rect)
    }
    
    function save(){
        let notes = document.querySelectorAll('textarea');
        let toSave = [];
    
        notes.forEach((note) => {
            toSave.push(note.value);
        });   
        localStorage.setItem("notes", JSON.stringify(toSave));
    }
})
