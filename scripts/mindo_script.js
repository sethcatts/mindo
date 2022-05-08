// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

//Hide the task and remove it from local data storage
var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        removeFromLocalStorageArray(div);
    }
}


//Add a task to the page and the local data storage
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '' && getSelectedListID() != '') {
        alert("You must write something and select a list!");
    } else {
        document.getElementById(getSelectedListID()).appendChild(li);
        addToLocalStorageArray(inputValue, getSelectedListID().substring(8));
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
}


//Get the ID of the currently selected list
function getSelectedListID() {
    var selectedList = "";
    if(document.getElementById("list1b").checked) {
        selectedList = "taskList1";
    } else if(document.getElementById("list2b").checked) {
        selectedList = "taskList2";
    } else if(document.getElementById("list3b").checked) {
        selectedList = "taskList3";
    } else {
        alert("Please select a list!");
    }
    return selectedList;
}
