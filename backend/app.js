const express = require('express')
const colors = require('colors')
const cors = require('cors')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')
const mongoConnect = require('./confg/db')

const port = process.env.PORT || 5000

// CONNECT MONGODB
mongoConnect()

// START APP
const app = express()
app.use(cors())

// LISTERNER
app.listen(port, console.log(`Server running on port ${port}`))

