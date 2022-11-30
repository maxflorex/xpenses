const mongoose = require('mongoose')


const BalanceSchema = new mongoose.Schema({
    bankBalance: {
        type: String
    },
}, { timestamps: true })

module.exports = mongoose.model('Balances', BalanceSchema)