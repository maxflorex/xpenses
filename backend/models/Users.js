const mongoose = require('mongoose')
const Expenses = require('./Expenses')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    expenses: {
        type: [Expenses.Schema]
    },
    balance: {
        type: Number
    }
}, { timestamps: true })

module.exports = mongoose.model('Users', UserSchema)