const todolist = [];

rendertodolist();

function rendertodolist(){
let todoListHTML = '';

 for (i=0; i<todolist.length; i++){
      const todoObject = todolist[i];
      //const name = todoObject.name;
     // const duedate = todoObject.duedate;
     // This is a short method for the above equation. 
     const {name, duedate} = todoObject;
      const  HTML = `
      <div>${name}</div> 
      <div>${duedate}</div>
      <button onclick="
      todolist.splice(${i}, 1); 
      rendertodolist();
      " class="deletebutton"> Delete </button>
 `; // This technique is called Generating HTML.
      //todolist.splice() element is used to delete a task.
      todoListHTML += HTML;
      }    
      
  document.querySelector('.java-div').innerHTML = todoListHTML;
    }

function addTodo() {
   /* const inputElement = document.querySelector('.javainput');
    const fname = inputElement.value; */
    
   /* const dateInputelement = document.querySelector('.javadate');
    const fduedate = dateInputelement.value; */

    // This is ashortcut for the above code

    const fname = document.querySelector('.javainput').value;
    const fduedate = document.querySelector('.javadate').value;
    

    todolist.push({
    name : fname,
   duedate: fduedate});

/* We can also create it as if both the property and variable name are same
   todolist.push({
    name,
    duedate
})*/

    /* inputElement.value = ''; We have commented this line as 
    this variable is no longer needed */
    rendertodolist();
}