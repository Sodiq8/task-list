	//selectors
    const addToDoButton = document.getElementById('addToDo');
    const toDoContainer = document.getElementById('toDoContainer');
    const inputField = document.getElementById('inputField');
    const clearToDoButton = document.getElementById('clearToDo'); 
    
    //Event listeners
    addToDoButton.addEventListener('click', addToDo)
    clearToDoButton.addEventListener('click', clearToDo)
    toDoContainer.addEventListener('click', deleteToDo)
    
    
    
    //Functons
    function addToDo(e) {
        const task = inputField.value;

        if (!task){
            alert("Please fill out the todo task");
            return
        }
     e.preventDefault();
     const todoDiv = document.createElement('div');
     todoDiv.classList.add('paragraph-style');
     todoDiv.innerText = inputField.value;
     inputField.value = "";
    
    const trashButton = document.createElement('button')
    trashButton.innerHTML = 'X';
    trashButton.classList.add("delete-btn")
    todoDiv.appendChild(trashButton);
    
    
     //append to toDoContainer
     toDoContainer.appendChild(todoDiv)
    }
    
    
    function deleteToDo(e) {
     console.log(e.target);
     const item = e.target;
     const toDoContainer = item.parentElement;
     toDoContainer.remove(); 
    }
    
    
    function clearToDo(e) {
     e.preventDefault();
     const item = e.target;
     const toDoContainer = item.parentElement;
     toDoContainer.remove();
     window.location.reload();
    }











