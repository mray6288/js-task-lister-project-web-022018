class Task {
	constructor(list, description, priority){
		this.list = list
		this.description = description
		this.priority = priority
	}

	renderTask(){
		return `Task: ${this.description}
		        <button data-list-title="${this.list.title}" data-task-name="${this.description}" class="delete-task">
		            X
		        </button>
		        <br>
		        Priority: ${this.priority}`
	}
}
