document.addEventListener('DOMContentLoaded', () => {

	const listDiv = document.getElementById("app-content");
	// const allLists = document.getElementById('lists')

	const app = new TaskLister();
	const LISTFORM = $('#create-list-form')[0]
	const TASKFORM = $('#app-content')[0]

	LISTFORM.addEventListener('submit', createList)
	TASKFORM.addEventListener('submit', createTask)


	
	function createList(event){
		event.preventDefault()
		title = $('#new-list-title')[0].value
		if (app.lists.find( list => list.title === title)) {
      		window.alert("List titles must be unique");
      		return
      	}
		
		let list = new List(title)
		app.lists.push(list)
		let allLists = null
		if (app.lists.length === 1){
			listDiv.innerHTML = app.render()
			allLists = document.createElement('div')
			allLists.id = 'lists'
			listDiv.append(allLists)

		} else{
			allLists = document.getElementById('lists')
			$('#parent-list')[0].innerHTML = app.listOptions()
		}
		let listElement = document.createElement('p')
		listElement.innerHTML = list.render()
		listElement.addEventListener('click', deleteElement)
		allLists.appendChild(listElement)
		// let listElement = $(`#${list.title}`)[0]
		
		event.target.reset()
	}

	function createTask(event){
		event.preventDefault()
		let list = app.findList($('#parent-list')[0].value)
		let task = new Task(list, $('#new-task-description')[0].value, $('#new-task-priority')[0].value)
		list.addTask(task)
		let taskElement = $(`#${list.title}-${task.description}`)[0]
		taskElement.addEventListener('click', deleteElement)
		event.target.reset()
	}

	function deleteElement(event){	
		if (event.target.getAttribute('class') === 'delete-list'){
			app.deleteList(event.target.getAttribute('data-title'))
			$('#parent-list')[0].innerHTML = app.listOptions()
		} else if (event.target.getAttribute('class') === 'delete-task'){
			let list = app.findList(event.target.getAttribute('data-list-title'))
			list.deleteTask(event.target.getAttribute('data-task-name'))
			event.stopPropagation()
		}
	}





});
