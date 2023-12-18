const todolist = [
    ];
     rendertodolist(); 

    function rendertodolist(){
        let todolistHTML = "";
             todolist.forEach(function(todo, index){
               const {name, Date} = todo;
                const HTML = `
                 <div>${name}</div>
                 <div>${Date}</div>
                 <button onclick="
                 todolist.splice(${index},1);
                 rendertodolist()"
                 class = "deletebutton">
                 Delete</button>
                `
                todolistHTML += HTML;
             });
    document.querySelector('.taskdiv').innerHTML = todolistHTML;
    }

    function addTodo(){
         const fname  = document.querySelector('.input').value;
         const fdate  = document.querySelector('.inputdate').value;

         todolist.push({
            name : fname,
            Date : fdate
         });

         rendertodolist();
    }