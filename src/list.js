
class List {
	constructor(title){
		this.title = title

		this.tasks = []
	}

	render(){

		return `<div id='${this.title}'>
			    <h2>${this.title}
			      <button data-title="${this.title}" class="delete-list">
			        X
			      </button>
			    </h2>
			    <ul>
			    	${this.tasks.map(task => task.renderTask())}
			    </ul>
			  </div>`

	}

	addTask(task){
		this.tasks.push(task)
		let listElement = $(`#${this.title}`)[0]
		let taskElement = document.createElement('li')
		taskElement.id = `${this.title}-${task.description}`
		taskElement.innerHTML = task.renderTask()
		listElement.appendChild(taskElement )
	}

	findTask(task_desc){
		return this.tasks.find(task => task.description === task_desc)
	}

	deleteTask(task_desc){
		let task = this.findTask(task_desc)
		// this.tasks.remove(task)
		let index = this.tasks.indexOf(task)
		this.tasks.splice(index, 1)
		let taskElement = $(`#${this.title}-${task.description}`)[0]
		taskElement.remove()


	}

	


}
