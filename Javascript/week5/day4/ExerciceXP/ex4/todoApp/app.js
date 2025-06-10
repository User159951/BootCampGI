import TodoList from './todo.js'; 

console.log("app.js: TodoList class imported.");

const myTodoList = new TodoList();

myTodoList.addTask("Buy groceries");
myTodoList.addTask("Finish JavaScript project");
myTodoList.addTask("Call Mom");
myTodoList.addTask("Read a book");

myTodoList.markTaskComplete(2); 
myTodoList.markTaskComplete(1); 
myTodoList.markTaskComplete(99); 

myTodoList.listAllTasks();

myTodoList.addTask("Plan weekend trip");
myTodoList.listAllTasks();