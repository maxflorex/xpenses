const Expenses = require('../models/Expenses')

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType, GraphQLFloat, GraphQLInt, GraphQLInputObjectType } = require('graphql')
const Users = require('../models/Users')


// ! DEFINE TYPES FOR USERS AND SUBDOCUMENTS


// EXPENSES TYPES
const ExpensesType = new GraphQLObjectType({
    name: 'Expenses',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        paidWith: { type: GraphQLString },
        paidBy: { type: GraphQLString },
        amount: { type: GraphQLString }
    })
})


// USER TYPES
const UsersType = new GraphQLObjectType({
    name: 'Users',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        balance: { type: GraphQLFloat },
        expenses: { type: new GraphQLList(ExpensesType) }
    })
})



// ! DEFINE INPUT TYPE FOR DATA ARGUMENTS

// USER INPUTS
const UserInputType = new GraphQLInputObjectType({
    name: 'UserInput',
    fields: () => ({
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        balance: { type: GraphQLFloat },
        expenses: { type: ExpensesInputType },
        updateExpense: { type: ExpensesUpdateInputType }
    })
})

// EXPENSE INPUTS
const ExpensesInputType = new GraphQLInputObjectType({
    name: 'ExpensesInput',
    fields: () => ({
        title: {
            type: GraphQLString
        },
        paidWith: { type: GraphQLString },
        paidBy: { type: GraphQLString },
        amount: { type: GraphQLString }
    })
})

// UPDATE EXPENSE INPUTS
const ExpensesUpdateInputType = new GraphQLInputObjectType({
    name: 'ExpensesUpdateInput',
    fields: () => ({
        title: {
            type: GraphQLString
        },
        paidWith: { type: GraphQLString },
        paidBy: { type: GraphQLString },
        amount: { type: GraphQLString }
    })
})



// ! ROOT QUERIES

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: new GraphQLList(UsersType),
            resolve(parent, args) {
                return Users.find()
            }
        },
        user: {
            type: UsersType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Users.findById(args.id)
            }
        }
    }
})


// ! MUTATIONS


const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {


        // ? ADD USER

        addUser: {
            type: UsersType,
            args: {
                username: { type: GraphQLString },
                email: { type: GraphQLString },
            },
            resolve(parent, args) {
                const newUser = new Users({
                    username: args.username,
                    email: args.email,
                })
                return newUser.save()
            }
        },


        // ? UPDATE USER

        updateUser: {
            type: UsersType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                data: { type: UserInputType }
            },
            resolve(parent, args) {
                return Users.findByIdAndUpdate(args.id, args.data)
            }
        },


        // ? DELETE USER

        deleteUser: {
            type: UsersType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                return Users.findByIdAndRemove(args.id)
            }
        },


        // ? ADD EXPENSE

        addExpense: {
            type: UsersType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                data: { type: UserInputType }
            },
            resolve(parent, args) {
                return Users.findByIdAndUpdate(args.id, {
                    $push: {
                        expenses: {
                            title: args.data.expenses.title,
                            paidBy: args.data.expenses.paidBy,
                            paidWith: args.data.expenses.paidWith,
                            amount: args.data.expenses.amount
                        }
                    }
                }, { new: true })
            }
        },


        // ? REMOVE EXPENSE

        removeExpense: {
            type: UsersType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                data: { type: UserInputType }
            },
            resolve(parent, args) {
                return Users.findByIdAndUpdate(args.id, {
                    $pull: {
                        expenses: {
                            title: args.data.expenses.title,
                        }
                    }
                })
            }
        },


        // UPDATE EXPENSE

        // updateExpense: {
        //     type: UsersType,
        //     args: {
        //         id: { type: new GraphQLNonNull(GraphQLID) },
        //         data: { type: UserInputType }
        //     },
        //     resolve(parent, args) {


        //         const User = Users.findById(args.id)

        //         return User.updateOne(
        //             {
        //                 expenses: {
        //                     title: args.data.expenses.title
        //                 }
        //             },
        //             {
        //                 expenses: {
        //                     title: args.data.updateExpense.title,
        //                     paidBy: args.data.updateExpense.paidBy,
        //                     paidWith: args.data.updateExpense.paidWith,
        //                     amount: args.data.updateExpense.amount
        //                 }
        //             }
        //         )

        //     }
        // }

        // - - - - - - - - - - - - - 
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})