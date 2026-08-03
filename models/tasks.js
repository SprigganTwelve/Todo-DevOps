const crypto = require("crypto");

class TaskModel {

    constructor() {
        this.tasks = [];
    }

    create(data) {

        const task = {
            id: crypto.randomUUID(),
            description: data.description,
            status: data.status || "todo",
            createdAt: new Date(),
            updatedAt: new Date()
        };

        this.tasks.push(task);

        return task;
    }

    findAll() {
        return this.tasks;
    }

    findById(id) {
        return this.tasks.find(task => task.id === id);
    }

    update(id, payload) {

        const task = this.findById(id);

        if (!task) return null;

        task.description = payload.description ?? task.description;
        task.status = payload.status ?? task.status;
        task.updatedAt = new Date();

        return task;
    }

    delete(id) {

        const index = this.tasks.findIndex(task => task.id === id);

        if (index === -1)
            return false;

        this.tasks.splice(index, 1);

        return true;
    }

}

module.exports = new TaskModel();