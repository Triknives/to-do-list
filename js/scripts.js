function TaskList(){
  this.tasks = [];
  this.currentId = 0
}

TaskList.prototype.addTask = function(task){
  task.id = this.assignId();
  this.tasks.push(task);
}
TaskList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

TaskList.prototype.deleteTask = function(id) {
  for (var i=0; i < this.tasks.length; i++){
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        delete this.tasks[i];
        return true;
      }
    }
  }
  return false;
}

TaskList.prototype.findTask = function(id) {
  for (var i=0; i < this.tasks.length; i++){
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        return this.tasks[i];
      }
    }
  }
  return false;
}



//Business logic for tasks
function Task(text, completed) {
  this.text = text;
  this.completed = completed;
}
var newList = new TaskList();
var newTask = new Task("Do the things!", false);

newList.addTask(newTask);

console.log(TaskList.tasks);
