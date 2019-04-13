localStorage.setItem("storedMindoTasks", JSON.stringify(["test0", "test1", "test2", "test3"]));

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
	  var span = document.createElement("SPAN");
	  var txt = document.createTextNode("\u00D7");
	  span.className = "close";
  	  span.appendChild(txt);
	  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  	close[i].onclick = function() {
	  	console.log("| Item closed");
    	var div = this.parentElement;
    	div.style.display = "none";
  	}
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
	if (ev.target.tagName === 'LI') {
    	ev.target.classList.toggle('checked');
		console.log("| Item marked complete");
  	}
}, false);

// Create a new list item when clicking on the "Add" button
// TODO: Store tasks when they are created.
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  console.log("| Adding list item");
}
