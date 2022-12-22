const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    paidWith: {
        type: String,
    },
    paidBy: {
        type: String,
    },
    amount: {
        type: Number,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
}, { timestamps: true })

module.exports = mongoose.model('Expenses', ExpenseSchema)