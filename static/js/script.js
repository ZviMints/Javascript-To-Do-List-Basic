function newItem(TheList,TheField) {
  let TaskList = document.getElementById(TheList);
  let TextField = document.getElementById(TheField);
  let newTask = document.createElement('LI');
  let Text = TextField.value;
  if(Text == "") return;
  
  let newTaskNode = document.createTextNode("  " + Text);
  let a_x = document.createElement('a');
  a_x.className = "close-thin";
  a_x.setAttribute("onclick", "remove()");
  newTask.appendChild(a_x);
  newTask.appendChild(newTaskNode);
  TaskList.appendChild(newTask);

  // Clear input
  TextField.value = "";

  // Save the list to localStorage
  localStorage[TheList] = TaskList.innerHTML // updating localstorage
}


function remove() {
  var node  = this.event.currentTarget.parentNode;
  node.setAttribute("style","opacity: 0;");
  var parent = node.parentNode;
  window.setTimeout(() => {
    parent.removeChild(node); 
    localStorage[parent.id] = parent.innerHTML // updating localstorage
  },1000);
}