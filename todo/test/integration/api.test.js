const Task = require("../../models/tasks");

describe("Task Model", () => {
    test("should create a task", () => {
        const task = await Task.create({
            description: "Learn Express"
        });

        expect(task.description).toBe("Learn Express");
        expect(task.status).toBe("todo");
        expect(task.id).toBeDefined();
    });

    test("should find all tasks", () => {
        const tasks = await Task.findAll();
        expect(tasks.length).toBeGreaterThan(0);
    });

    test("should create a task", async () => {
        const task = await Task.create({
            description: "Learn Express"
        });

        expect(task.description).toBe("Learn Express");
    });

    test("should delete task", () => {
        const task = await Task.create({
            description: "Delete me"
        });

        expect(Task.delete(task.id)).toBe(true);
    });

});