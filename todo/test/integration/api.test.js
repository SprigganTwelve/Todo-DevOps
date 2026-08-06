const Task = require("../../models/tasks");

describe("Task Model", () => {
    test("should create a task", async () => {
        const task = await Task.create({
            description: "Learn Express"
        });

        expect(task.description).toBe("Learn Express");
        expect(task.status).toBe("todo");
        expect(task.id).toBeDefined();
    });

    test("should find all tasks", async () => {
        const tasks = await Task.findAll();
        expect(tasks.length).toBeGreaterThan(0);
    });

    test("should create a task", async () => {
        const task = await Task.create({
            description: "Learn Express"
        });

        expect(task.description).toBe("Learn Express");
    });

    test("should delete task", async () => {
        const task = await Task.create({
            description: "Delete me"
        });
        const deleted = await Task.delete(task.id);
        expect(deleted).toBe(true);
    });

});