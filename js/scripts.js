// Business Logic for To-Do List ---------

function ToDo() {
  this.tasks = []
}

ToDo.prototype.addTask = function(task) {
  this.tasks.push(task)
}

// AddressBook.prototype.findContact = function(id) {
//   for (var i=0; i< this.contacts.length; i++) {
//     if (this.contacts[i]) {
//       if (this.contacts[i].id == id) {
//         return this.contacts[i];
//       }
//     }
//   };
//   return false;
// }

ToDo.prototype.deleteTask = function(name) {
  for (var i=0; i< this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].name == name) {
        delete this.tasks[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Tasks ---------

function Task(name, priority) {
  this.name = name,
  this.priority = priority
}

// UI Logic

$(document).ready(function() {
  var toDoList = new ToDo;

  $("form").submit(function(event) {
    event.preventDefault();

    var taskInput = $("#task").val();
    var priorityInput = parseInt($("#priority").val());

    var tasks = new Task(taskInput, priorityInput);

    $("#list").append("<li>" + tasks.name + " " + "<span>" + tasks.priority + "</span></li>");

    console.log(tasks);
  });
});
