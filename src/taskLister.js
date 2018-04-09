class TaskLister {

	constructor(){
		this.lists = []
	}

	

	render() {
		return (`<div id="app-content">
		  <form id="create-task-form">
		    <label for="parent-list">Select List:</label>
		    <select id="parent-list">
		    	${this.listOptions() }

		    </select>
		 
		    <label for="new-task-description">Task description:</label>
		    <input required type="text" id="new-task-description" placeholder="description">
		 
		    <label for="new-task-priority">Priority level:</label>
		    <input type="text" id="new-task-priority" placeholder="priority">
		    <input type="submit" value="Create New Task">
		  </form>
		</div>`);
	}

	listOptions(){
		return this.lists.map(list => `<option value=${list.title}> ${list.title} </option>`)
	}

	findList(list_title){
		return this.lists.find(list => list.title === list_title)
	}

	deleteList(list_title){
		let list = this.findList(list_title)
		// this.lists.remove(list)
		let index = this.lists.indexOf(list)
		this.lists.splice(index, 1)

		let listElement = $(`#${list.title}`)[0]
		listElement.remove()
	}
}
