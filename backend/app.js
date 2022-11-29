const express = require('express')
const colors = require('colors')
const cors = require('cors')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')
const mongoConnect = require('./db')
const schema = require('./schema/schema')

const port = process.env.PORT || 5000

// CONNECT MONGODB
mongoConnect()

// START APP
const app = express()
app.use(cors())

// GRAPHQL PLAYGROUND
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

// LISTERNER
app.listen(port, console.log(`Server running on port ${port}`))

