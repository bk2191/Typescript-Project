class Task {
    public id: number;
    public description: string;
    private completed: boolean = false;

    constructor(id: number, description: string) {
        this.id = id;
        this.description = description;
    }

    public markAsCompleted(): void {
        this.completed = true;
        console.log(`Task "${this.description}" marked as completed.`);
    }

    public updateDescription(newDescription: string): void {
        this.description = newDescription;
        console.log(`Task updated to: "${this.description}"`);
    }

    public isCompleted(): boolean {
        return this.completed;
    }

    public getDetails(): string {
        const status = this.completed ? "Completed" : "Pending";
        return `${this.id} ${this.description} - ${status}`;
    }
}

class TaskManager {
    private tasks: Task[] = [];

    public addTask(description: string): void {
        const id = this.tasks.length + 1;
        const task = new Task(id, description);
        this.tasks.push(task);
        console.log(`Task added: "${description}"`);
    }

    public listTasks(): void {
        console.log("\nAll Tasks:");
        this.tasks.forEach(task => {
            console.log(task.getDetails());
        });
    }

    public completeTask(id: number): void {
        const task = this.tasks.find(t => t.id === id);
        if (!task) {
            console.log("Task not found.");
            return;
        }
        task.markAsCompleted();
    }

    public updateTask(id: number, newDescription: string): void {
        const task = this.tasks.find(t => t.id === id);
        if (!task) {
            console.log("Task not found.");
            return;
        }
        task.updateDescription(newDescription);
    }

    public listCompletedTasks(): void {
        console.log("\nCompleted Tasks:");
        this.tasks
            .filter(t => t.isCompleted())
            .forEach(t => console.log(t.getDetails()));
    }

    public listPendingTasks(): void {
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
