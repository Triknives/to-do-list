function TaskList(){
  this.tasks = [];
  this.currentId = 0
}

TaskList.prototype.addTask = function(task){
  task.id = this.assignId();
  this.tasks.push(task);
}

TaskList.prototype.updateStatus = function(id){
  for (var i=0; i < this.tasks.length; i++){
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        //toggles between true / false by referencing itself with a !
        this.tasks[i].completed = !this.tasks[i].completed;
      }
    }
  }
  return false;
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

//Initialize a blank list
var newList = new TaskList();

function displayTasks(currentTaskList) {
  var displayedList = $("ul#listLanding");
  var htmlForListDisplay = "";
  currentTaskList.tasks.forEach(function(task) {
    htmlForListDisplay += "<li id=" + task.id + ">" + task.text + " Status: " + task.completed + "</li>";
  });
  displayedList.html(htmlForListDisplay);
};

// function destroyerOfLists() {
//     $("#listLanding").on("click", "li", function() {
//         newList.deleteTask(this.id);
//         displayTasks(newList);
//       });
//     };


function taskUpdate() {
  $("#listLanding").on("click", "li", function() {
    newList.updateStatus(this.id);
    displayTasks(newList);
  });
};

//User Interface
$(document).ready(function(){
  taskUpdate();
  $("#taskForm").submit(function(event){
    event.preventDefault();
    var newTask = new Task ($("#theTask").val(), false);
    newList.addTask(newTask);
    displayTasks(newList);
  });
});
