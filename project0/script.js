loadEvents();
// load every event in the page
function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
}
// subit data function
function submit(e){
  e.preventDefault();
  let input = document.querySelector('input');
  if(input.value != '')
    newTodo(input.value);
  input.value = '';
}


const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const itemAutoIncrementSpan = document.getElementById('item-auto-increment')

function newTodo(task) {
  //alert('New TODO button clicked!')
  let counter = itemCountSpan.innerText++
  let counterUnchecked = uncheckedCountSpan.innerText++
  itemAutoIncrementSpan.innerText++
  let todo = task;
  
  //let ul = document.querySelector('ul');
  let li = document.createElement('li'); //id='"+(counter+1)+"'
  li.innerHTML = "<span class='delete' onclick='deleteTodo("+(itemAutoIncrementSpan.innerText)+")'>×</span><span id='_"+itemAutoIncrementSpan.innerText+"'><input type='checkbox' onclick='unchecked("+itemAutoIncrementSpan.innerText+")'><label> "+todo+"</label></span>";
  const newChild = list.appendChild(li);
  newChild.setAttribute("id", itemAutoIncrementSpan.innerText);
  newChild.setAttribute("style", 'margin-bottom:2px;');

/*
 g = document.createElement('div');
g.setAttribute("id", "Div1");
  */
}

function unchecked(id) {	
    let ide = "_"+id 
	let itemToDo = document.getElementById(ide)
	//alert(id)
	
	if(itemToDo.style.textDecoration === 'line-through'){
		 itemToDo.style.textDecoration = ""
		 uncheckedCountSpan.innerText++
	}else{
		 itemToDo.style.textDecoration = "line-through"
		 uncheckedCountSpan.innerText--
	}
  //
 
 
}

function deleteTodo(id) {
  //alert('Delete TODO button clicked! Id: ' + (id+1))
  let itemToDelete = document.getElementById(id)
  
  //var span = document.getElementsByClassName("hideme");
        itemToDelete.parentNode.removeChild(itemToDelete);  
 
 document.getElementById('todo-list')
 
  itemCountSpan.innerText--
  if(itemToDelete.style.textDecoration === 'line-through'){
	  
  }else{
	  uncheckedCountSpan.innerText--
  }
 //alert(itemToDelete.style.textDecoration)
 //uncheckedCountSpan.innerText--
 
}