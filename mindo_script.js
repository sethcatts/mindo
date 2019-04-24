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
        var div = this.parentElement;
        div.style.display = "none";
        removeFromLocalStorageArray(div);
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
    if (inputValue === '' && getSelectedListID() != '') {
        alert("You must write something and select a list!");
    } else {
        document.getElementById(getSelectedListID()).appendChild(li);
        addToLocalStorageArray(inputValue);
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
            removeFromLocalStorageArray(div);
        }
    }
    console.log("| Adding list item");
}

function getSelectedListID() {
    var selectedList = "";
    if(document.getElementById("list1b").checked) {
        selectedList = "list1";
    } else if(document.getElementById("list2b").checked) {
        selectedList = "list2";
    } else if(document.getElementById("list3b").checked) {
        selectedList = "list3";
    } else {
        alert("Please select a list!");
    }
    return selectedList;
}
