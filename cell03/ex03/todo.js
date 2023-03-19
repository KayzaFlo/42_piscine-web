var taskCount = parseInt(document.cookie);
if (isNaN(taskCount)) {
	taskCount = 0;
	document.cookie = taskCount;
}
else
{
	for (let i = 0; i < taskCount; i++) {
		taskCount--;
		addTodo();
	}
}

function addTodo() {
	const node = document.createElement("div");
	ft_list.appendChild(node);
	node.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
	node.addEventListener("click", deleteTodo);
	node.className = "task";
	taskCount++;
	document.cookie = taskCount;
}

function deleteTodo(event) {
	event.target.remove();
	taskCount--;
	document.cookie = taskCount;
}

buttonNew.addEventListener("click", addTodo, 1);