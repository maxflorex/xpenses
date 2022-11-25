const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    paidWith: {
        type: String,
        enum: ['Cash', 'Card']
    },
    paidBy: {
        type: String,
    },
    amount: {
        type: Number
    }
}, { timestamps: true })

module.exports = mongoose.model('Expenses', ExpenseSchema)