const Task = require("../models/taskModel");

describe("Task Model", () => {

    test("should create a task", () => {

        const task = Task.create({
            description: "Learn Express"
        });

        expect(task.description).toBe("Learn Express");

        expect(task.status).toBe("todo");

        expect(task.id).toBeDefined();

    });

    test("should find all tasks", () => {

        const tasks = Task.findAll();

        expect(tasks.length).toBeGreaterThan(0);

    });

    test("should update task", () => {

        const task = Task.create({
            description: "Old"
        });

        const updated = Task.update(task.id, {
            description: "New"
        });

        expect(updated.description).toBe("New");

    });

    test("should delete task", () => {

        const task = Task.create({
            description: "Delete me"
        });

        expect(Task.delete(task.id)).toBe(true);

    });

});