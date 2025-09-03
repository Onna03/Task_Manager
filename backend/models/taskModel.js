import mongoose from 'mongoose';

const taskschema = new mongoose.Schema({
    title: { type: String, required: [true, 'Title is required'] },
    description: { type: String, required: [true, 'Description is required'] },
    category: { type: String, required: [true, 'Category is required'] },
    dueDate: { type: Date },
}, { timestamps: true });

const Task = mongoose.model('Task', taskschema);

export default Task;