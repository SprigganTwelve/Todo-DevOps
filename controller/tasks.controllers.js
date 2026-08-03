
//----------------------------
//----- Controllers
//-----------------------------

const Task = require("../models/tasks");

const createTask = (req, res, next) => {
    try {

        const { description, status } = req.body;

        if (!description)
            return res.status(400).json({
                message: "description is required"
            });

        const task = Task.create({
            description,
            status
        });

        res.status(201).json(task);

    }
    catch (err) {
        next(err);
    }

};

const getTasks = (req, res, next) => {

    try {

        res.json(Task.findAll());

    } catch (err) {
        next(err);
    }

};

const getTask = (req, res, next) => {

    try {

        const task = Task.findById(req.params.id);

        if (!task)
            return res.status(404).json({
                message: "Task not found"
            });

        res.json(task);

    } catch (err) {
        next(err);
    }

};

const updateTask = (req, res, next) => {

    try {

        const task = Task.update(req.params.id, req.body);

        if (!task)
            return res.status(404).json({
                message: "Task not found"
            });

        res.json(task);

    } catch (err) {
        next(err);
    }

};

const deleteTask = (req, res, next) => {

    try {

        const deleted = Task.delete(req.params.id);

        if (!deleted)
            return res.status(404).json({
                message: "Task not found"
            });

        res.status(204).send();

    } catch (err) {
        next(err);
    }

};

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
};