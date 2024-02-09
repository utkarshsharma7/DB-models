import mongoose from 'mongoose'

const subTodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy : {
        type: mongoose.Schema.Types.ObjectId,  // reference to the user who owns this todo
        ref: 'Todo'                            // which model is being referenced (in this case Todo)
    }
}, {timestamps:true})



export const SubTodo = mongoose.model('Todo', subTodoSchema)