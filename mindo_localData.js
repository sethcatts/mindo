load();

//Helper - Get local storage data and pushes to append function
function load() {
	const localTasks = returnLocalStorageArray();
	appendStoredTasks(localTasks);
}

//Return the current value of the local storage array
//TODO: refactor
function returnLocalStorageArray() {
		const storedTasks = JSON.parse(localStorage.getItem("storedMindoTasks"));
		if(storedTasks != null) {
			return storedTasks;
		} else {
			localStorage.setItem("storedMindoTasks", JSON.stringify([]));
			var init = JSON.parse(localStorage.getItem("storedMindoTasks"));
			return init;
		}
}

//Weird edge case with DEFAULT CASE, ignoring for now
function removeFromLocalStorageArray(div) {
	var taskName = div.textContent.substring(0, div.textContent.length - 1);
	console.log(taskName);
	var localTasks = returnLocalStorageArray();
	localTasks.splice(localTasks.indexOf(taskName), 1 );
	localStorage.setItem("storedMindoTasks", JSON.stringify(localTasks));
}

//Add an item to the local storage array
function addToLocalStorageArray(task) {
	var localTasks = returnLocalStorageArray();
	localTasks.push(task);
	localStorage.setItem("storedMindoTasks", JSON.stringify(localTasks));
}

// Runs once on page load to add the tasks from storage to the task list
// TODO: Refactor
function appendStoredTasks(array) {
	for(let i = 0; i < array.length; i++) {
		var li = document.createElement("li");
		var t = document.createTextNode(array[i]);
		li.appendChild(t);
		document.getElementById("myUL").appendChild(li);
		document.getElementById("myInput").value = "";
		var span = document.createElement("SPAN");
		var txt = document.createTextNode("\u00D7");
		span.className = "close";
		span.appendChild(txt);
		li.appendChild(span);
		for (let x = 0; x < close.length; x++) {
			close[x].onclick = function() {
				var div = this.parentElement;
				div.style.display = "none";
				removeFromLocalStorageArray(div);
			}
		}
	}
}
