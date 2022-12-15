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
    }
}, { timestamps: true })

module.exports = mongoose.model('Expenses', ExpenseSchema)