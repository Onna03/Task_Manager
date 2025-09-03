import mongoose from 'mongoose';

const taskschema = new mongoose.Schema({
    title: { type: String, requires: [true, 'Title is required'] },
    description: { type: String, requires: [true, 'Description is required'] },
    category: { type: String, requires: [true, 'Category is required'] },
    dueDate: { type: Date },
}, { timestamps: true });

const Task = mongoose.model('Task', taskschema);

export default Task;