let Link = document.querySelector("#Link");
let LinkButton = document.querySelector("#LinkButton");
let LinkList = document.querySelector("#LinkList");
let LinkAbout = document.querySelector("#LinkAbout");

LinkButton.onclick = () => {

  if(LinkAbout.value == "" || Link.value == "" ) return;
  var a = document.createElement("a");
  var newItem = document.createElement("li");
  a.textContent = LinkAbout.value;
  a.setAttribute('href', Link.value);

  let a_x = document.createElement('a');
  a_x.className = "close-thin";
  a_x.setAttribute("onclick", "LinkList_remove()");

  newItem.appendChild(a_x);
  newItem.appendChild(a);
  LinkList.appendChild(newItem);


  // Clear input
  LinkAbout.value = "תיאור קצר";
  Link.value = "";

 // Save the list to localStorage
 localStorage["LinkList"] = LinkList.innerHTML // updating localstorage
}

function LinkList_remove() {
    var task = this.event.currentTarget.parentNode;
    task.setAttribute("style","opacity: 0;");
    window.setTimeout(() => {
      LinkList.removeChild(task); 
      localStorage["LinkList"] = LinkList.innerHTML // updating localstorage
    },1000);
  }


  if (localStorage["LinkList"]) {
    LinkList.innerHTML = localStorage["LinkList"];
  }

    
  if (localStorage["OtherList"]) {
    document.getElementById("OtherList").innerHTML = localStorage["OtherList"];
  }