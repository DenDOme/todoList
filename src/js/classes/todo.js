export default class Todo{
    constructor(name,desc,dueDate,priority){
        this.name = name,
        this.desc = desc,
        this.dueDate = dueDate,
        this.priorityNumber = priority.priority
        this.priorityText = priority.text
        this.expired = null
    }
}