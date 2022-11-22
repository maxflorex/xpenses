const mongoose = require('mongoose')

const balanceSchema = new mongoose.Schema({
    bankBalance: {
        type: Number
    },
    // {
    //     timestamps:
    // }
})

module.exports = mongoose.model('Balances', balanceSchema)