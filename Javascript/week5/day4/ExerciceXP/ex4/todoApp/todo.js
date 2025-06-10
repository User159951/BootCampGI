class TodoList {
  constructor() {
    this.tasks = []; 
    this.nextTaskId = 1; 
}

    addTask(taskText) {
    if (typeof taskText !== 'string' || taskText.trim() === '') {
      console.warn("Task text must be a non-empty string.");
      return;
    }
    const newTask = {
      id: this.nextTaskId++,
      text: taskText.trim(),
      completed: false,
    };
    this.tasks.push(newTask);
    console.log(`Task added: "${newTask.text}" (ID: ${newTask.id})`);
   }

     markTaskComplete(id) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = true;
      console.log(`Task "${task.text}" (ID: ${task.id}) marked as complete.`);
      return true;
    } else {
      console.warn(`Task with ID ${id} not found.`);
      return false;
    }
  }

  listAllTasks() {
    console.log("\n--- Current Todo List ---");
    if (this.tasks.length === 0) {
      console.log("No tasks in the list.");
      return [];
    }
    this.tasks.forEach(task => {
      const status = task.completed ? "✅ [DONE]" : "⏳ [PENDING]";
      console.log(`ID: ${task.id} | ${status} | Task: "${task.text}"`);
    });
    console.log("-------------------------\n");
    return this.tasks;
  }
}

export default TodoList;