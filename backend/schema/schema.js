const Expenses = require('../models/Expenses')
const Balances = require('../models/Balances')

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType } = require('graphql')


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
            type: GraphQLString
        }
    })
})


// BALANCE TYPES
const BalanceType = new GraphQLObjectType({
    name: 'Balance',
    fields: () => ({
        id: { type: GraphQLID },
        bankBalance: { type: GraphQLString }
    })
})


// DEFINE ROOT QUERIES
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // EXPENSE & EXPENSES
        expenses: {
            type: new GraphQLList(ExpensesType),
            resolve(parent, args) {
                return Expenses.find(args.id)
            }
        },
        expense: {
            type: ExpensesType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Expenses.findById(args.id)
            }
        },
        // // BALANCE & BALANCES
        balances: {
            type: new GraphQLList(BalanceType),
            resolve(parent, args) {
                return Balances.find(args.id)
            }
        },
        balance: {
            type: BalanceType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Balances.findById(args.id)
            }
        }

    }
})


// * MUTATIONS


const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {

        // ADD EXPENSE

        addExpense: {
            type: ExpensesType,
            args: {
                title: { type: GraphQLString },
                paidWith: {
                    type: new GraphQLEnumType({
                        name: 'PaidWith',
                        values: {
                            'Cash': { value: 'Cash' },
                            'Card': { value: 'Card' },
                        }
                    }),
                    defaultValue: 'Cash'
                },
                paidBy: { type: GraphQLString },
                amount: { type: GraphQLString },
            },
            resolve(parent, args) {
                const expense = new Expenses({
                    title: args.title,
                    paidWith: args.paidWith,
                    paidBy: args.paidBy,
                    amount: args.amount
                });
                return expense.save()
            }
        },

        // ADD BALANCE

        addBalance: {
            type: BalanceType,
            args: {
                bankBalance: { type: GraphQLString },
            },
            resolve(parent, args) {
                const balance = new Balances({
                    bankBalance: args.bankBalance
                });
                return balance.save()
            }
        },

        // DELETE EXPENSE

        deleteExpense: {
            type: ExpensesType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                Expenses.findByIdAndRemove(args.id)
            }
        },

        // DELETE BALANCE

        deleteBalance: {
            type: BalanceType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                Balances.findByIdAndRemove(args.id)
            }
        },

        // UPDATE EXPENCE

        updateExpence: {
            type: ExpensesType,
            args: {
                id: { type: GraphQLID },
                title: { type: GraphQLString },
                paidWith: {
                    type: new GraphQLEnumType({
                        name: 'PaidWith',
                        values: {
                            'Cash': { value: 'Cash' },
                            'Card': { value: 'Card' },
                        }
                    }),
                    defaultValue: 'Cash'
                },
                paidBy: { type: GraphQLString },
                amount: { type: GraphQLString },
            },
            resolve(parent, args) {
                return Expenses.findByIdAndUpdate(
                    args.id, {
                    $set: {
                        title: args.title,
                        paidWith: args.paidWith,
                        paidBy: args.paidBy,
                        amount: args.amount
                    }
                },
                    // IF NOT EXIST, CREATE
                    { new: true }
                )
            }
        },

        // UPDATE BALANCE
        updateBalance: {
            type: BalanceType,
            args: {
                id: { type: GraphQLID },
                bankBalance: { type: GraphQLString }
            },
            resolve(parent, args) {
                return Balances.findByIdAndUpdate(
                    args.id, {
                    $set: {
                        bankBalance: args.bankBalance
                    }
                },
                    // IF NOT EXIST, CREATE
                    { new: true }
                )
            }
        }


    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})