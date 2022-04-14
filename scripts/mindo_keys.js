var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        newElement();
    }else if(event.keyCode === 38) {
        event.preventDefault();
        rotateSelectedList(event.keyCode);
        console.log("Key: left");
    } else if(event.keyCode === 40) {
        event.preventDefault();
        rotateSelectedList(event.keyCode);
        console.log("Key: right");
    }
});

function rotateSelectedList(key) {
    var l = getSelectedListID();
    var r = key == 40;
    if(l === "taskList1") {
        if(r) {
            document.getElementById("list2b").checked = true;
        } else {
            document.getElementById("list3b").checked = true;
        }
    } else if(l === "taskList2") {
        if(r) {
            document.getElementById("list3b").checked = true;
        } else {
            document.getElementById("list1b").checked = true;
        }
    } else if(l === "taskList3") {
        if(r) {
            document.getElementById("list1b").checked = true;
        } else {
            document.getElementById("list2b").checked = true;
        }
    }
}
