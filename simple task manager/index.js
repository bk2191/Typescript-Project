"use strict";
class Task {
    constructor(id, description) {
        this.completed = false;
        this.id = id;
        this.description = description;
    }
    markAsCompleted() {
        this.completed = true;
        console.log(`Task "${this.description}" marked as completed.`);
    }
    updateDescription(newDescription) {
        this.description = newDescription;
        console.log(`Task updated to: "${this.description}"`);
    }
    isCompleted() {
        return this.completed;
    }
    getDetails() {
        const status = this.completed ? "Completed" : "Pending";
        return `${this.id} ${this.description} - ${status}`;
    }
}
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(description) {
        const id = this.tasks.length + 1;
        const task = new Task(id, description);
        this.tasks.push(task);
        console.log(`Task added: "${description}"`);
    }
    listTasks() {
        console.log("\nAll Tasks:");
        this.tasks.forEach(task => {
            console.log(task.getDetails());
        });
    }
    completeTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (!task) {
            console.log("Task not found.");
            return;
        }
        task.markAsCompleted();
    }
    updateTask(id, newDescription) {
        const task = this.tasks.find(t => t.id === id);
        if (!task) {
            console.log("Task not found.");
            return;
        }
        task.updateDescription(newDescription);
    }
    listCompletedTasks() {
        console.log("\nCompleted Tasks:");
        this.tasks
            .filter(t => t.isCompleted())
            .forEach(t => console.log(t.getDetails()));
    }
    listPendingTasks() {
        console.log("\nPending Tasks:");
        this.tasks
            .filter(t => !t.isCompleted())
            .forEach(t => console.log(t.getDetails()));
    }
}
const manager = new TaskManager();
manager.addTask("Buy groceries");
manager.addTask("Study TypeScript");
manager.addTask("Finish assignment");
manager.listTasks();
manager.completeTask(2);
manager.updateTask(3, "Finish TypeScript assignment");
manager.listCompletedTasks();
manager.listPendingTasks();
