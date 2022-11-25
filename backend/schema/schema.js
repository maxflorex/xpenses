const Expenses = require('../models/Expenses')
const Balances = require('../models/Balances')

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType, GraphQLFloat } = require('graphql')


// EXPENSES TYPES
const ExpensesType = new GraphQLObjectType({
    name: 'Expenses',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        paidWith: {
            type: new GraphQLEnumType({
                name: 'paidWith',
                values: {
                    'Cash': { value: 'Cash' },
                    'Card': { value: 'Card' },
                }
            })
        },
        paidBy: {
            type: GraphQLString
        },
        amount: {
            type: GraphQLFloat
        }
    })
})


// BALANCE TYPES
const BalanceType = new GraphQLObjectType({
    name: 'Balance',
    fields: () => ({
        id: { type: GraphQLID },
    })
})