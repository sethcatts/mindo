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
for(let i = 0; i < 3; i++) {
    document.getElementById("list"+(i+1)).addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
            console.log("| Item marked complete");
        }
    }, false);
}


// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '' && getSelectedListID() != '') {
        //TODO: Change this to highlight the input field for a second
        //alert("You must write something and select a list!");
        var input = document.getElementById("myInput");
        input.style.backgroundColor = "black";
        //await new Promise(r => setTimeout(r, 2000));
        //input.style.backgroundColor = "white";
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
    console.log("| Adding list item");
}


//Return the selected list gotten via the radio buttons
//COMPLETE
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
