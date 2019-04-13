load();

function load() {
	const localTasks = returnLocalStorageArray();
	appendStoredTasks(localTasks);
}

function returnLocalStorageArray() {
		const storedTasks = JSON.parse(localStorage.getItem("storedMindoTasks"));
		return storedTasks;
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
			}
		}
	}
}
