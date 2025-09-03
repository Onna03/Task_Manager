import Task from '../models/taskModel.js';

// @desc    Get all tasks
// @route   GET /api/tasks
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.json(tasks);        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// @desc   Create task
// @route  POST /api/tasks
export const createTask = async (req, res) => {
    const { title, description, category } = req.body;
    try {
        const newTask = new Task({ title, description, category });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// @desc    Get task by ID
// @route   GET /api/tasks/:id
export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// @desc    Update task
// @route   PUT /api/tasks/:id
export const updateTask = async (req, res) => {
    try {
        const Task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// @desc    Delete task
// @route   DELETE /api/tasks/:id   
export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (task) {
            res.json({ message: 'Task deleted' });
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}           