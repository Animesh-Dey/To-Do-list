
//Selectors

const todoinput=document.querySelector('.todo-input');
const todobutton=document.querySelector('.todo-button');
const todolist=document.querySelector('.todo-list');
const filteroption=document.querySelector('.filter-todo');
const hidebox=document.querySelector('.hide');

//Event Listners

todobutton.addEventListener('click',addtodo);
todolist.addEventListener('click',deletcheck);
hidebox.addEventListener('change',hidetodo);

//Function
function addtodo(event){

  //prevent form from submitting

  event.preventDefault();
  if(todoinput.value==='')
  {
    
  }
  else{

  /*This was created below
    <div class="todo"> <li></li>
            <button>delete</button>
            <button>check</button></div>*/


  //todo div


  const tododiv=document.createElement('div');
  tododiv.classList.add("todo");


  //create li


  const newtodo=document.createElement('li');
  newtodo.innerText=todoinput.value;
  newtodo.classList.add('todo-item');
  tododiv.appendChild(newtodo);


  //Check mark button


   const completedbutton=document.createElement('button');
   completedbutton.innerHTML='<i class="fas fa-check"></li>';
   completedbutton.classList.add("completed-button");
   tododiv.appendChild(completedbutton);


   //Check trash button
   const trashbutton=document.createElement('button');
   trashbutton.innerHTML='<i class="fas fa-trash"></li>';
   trashbutton.classList.add("trash-button");
   tododiv.appendChild(trashbutton);
   
   //Append list

   todolist.appendChild(tododiv);
   
   //

   

   //Clear to do input value

   todoinput.value="";
  }
  
}

function deletcheck(e){
  //Delete todo list
  const item=e.target;
  if(item.classList[0]==='trash-button'){
   
     const todo=item.parentElement;
     todo.classList.add("fall");
     todo.remove();

  }

   //Check mark

    if(item.classList[0]==="completed-button"){
      const todo=item.parentElement;
      todo.classList.toggle("completed");
    }
}

//Hide all elements

function hidetodo(e){

  if(hidebox.checked){
    todolist.style.display='none';
  }
  else{
    todolist.style.display='initial';
  }
}