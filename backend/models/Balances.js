const mongoose = require('mongoose')

const BalanceSchema = new mongoose.Schema({
    bankBalance: {
        type: Number
    },
}, { timestamps: true })

module.exports = mongoose.model('Balances', BalanceSchema)