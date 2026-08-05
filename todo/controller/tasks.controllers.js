const Task = require("../models/tasks");



const createTask = async (req,res,next)=>{
    try {
        const { description, status = 'to-do' }=req.body;

        if(!description){
            return res.status(400).json({
                message:"description is required"
            });
        }

        const task = await Task.create({
            description,
            status
        });

        res.status(201).json(task);
    }
    catch(err){
        next(err);
    }
};


const getTasks = async(req,res,next)=>{
    try{
        const tasks = await Task.findAll();
        res.json(tasks);
    }
    catch(err){
        next(err);
    }
};



const getTask = async(req,res,next)=>{
    try{
        const task = await Task.findById(req.params.id);

        if(!task){
            return res.status(404).json({
                message:"Task not found"
            });
        }

        res.json(task);
    }
    catch(err){
        next(err);
    }
};




const updateTask = async(req,res,next)=>{
    try{
        const task = await Task.update(
            req.params.id,
            req.body
        );

        if(!task){
            return res.status(404).json({
                message:"Task not found"
            });
        }

        res.json(task);

    }catch(err){
        next(err);
    }
};



const deleteTask = async(req,res,next)=>{
    try{
        const deleted = await Task.delete(
            req.params.id
        );

        if(!deleted){
            return res.status(404).json({
                message:"Task not found"
            });
        }

        res.status(204).send();

    }
    catch(err){
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