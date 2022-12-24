const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLEnumType, GraphQLFloat, GraphQLInt, GraphQLInputObjectType } = require('graphql')
const Expenses = require('../models/Expenses')
const Users = require('../models/Users')
const bcrypt = require('bcrypt')


// ! DEFINE TYPES FOR USERS AND SUBDOCUMENTS


// EXPENSES TYPES
const ExpensesType = new GraphQLObjectType({
    name: 'Expenses',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        paidWith: { type: GraphQLString },
        paidBy: { type: GraphQLString },
        amount: { type: GraphQLFloat },
        user: {
            type: UsersType,
            resolve(parent, args) {
                return Users.findById(parent.userId)
            }
        }
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
        hashedPw: { type: GraphQLString }
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
        pw: { type: GraphQLString }
    })
})

// EXPENSE INPUTS
const ExpensesInputType = new GraphQLInputObjectType({
    name: 'ExpensesInput',
    fields: () => ({
        title: { type: GraphQLString },
        paidWith: { type: GraphQLString },
        paidBy: { type: GraphQLString },
        amount: { type: GraphQLFloat },
        userId: { type: GraphQLID }
    })
})


// ! ROOT QUERIES

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        expenses: {
            type: new GraphQLList(ExpensesType),
            args: {
                data: { type: ExpensesInputType }
            },
            resolve(parent, args) {
                return Expenses.find({ 'userId': args.data.userId })
            }
        },
        expense: {
            type: ExpensesType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Expenses.findById(args.id)
            }
        },
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
        },
        login: {
            type: UsersType,
            args: { data: { type: UserInputType } },
            resolve: async (parent, args) => {

                const username = args.data.username
                const user = await Users.findOne({ username })
                const match = await bcrypt.compare(args.data.pw, user.hashedPw)

                if (match) {
                    return user
                } else {
                    return null
                }

            }
        }
    }
})


// ! MUTATIONS


const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {


        // * ADD USER

        addUser: {
            type: UsersType,
            args: {
                data: { type: UserInputType }
            },
            resolve(parent, args) {

                const registration = async () => {
                    const username = args.data.username
                    const email = args.data.email
                    const password = await bcrypt.hash(args.data.pw, 12)

                    const newUser = new Users({
                        username: username,
                        email: email,
                        hashedPw: password
                    })

                    return await newUser.save()
                }

                return registration()

            }
        },


        // * UPDATE USER

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


        // * DELETE USER

        deleteUser: {
            type: UsersType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                // REMOVE LINKED EXPENSES
                Expenses.find({ userId: args.id }).then((xpenses) => {
                    xpenses.forEach((x) => {
                        x.remove()
                    })
                })

                return Users.findByIdAndRemove(args.id)
            }
        },


        // * ADD EXPENSE

        addExpense: {
            type: ExpensesType,
            args: {
                data: { type: ExpensesInputType }
            },
            resolve(parent, args) {
                const expense = new Expenses({
                    title: args.data.title,
                    paidWith: args.data.paidWith,
                    paidBy: args.data.paidBy,
                    amount: args.data.amount,
                    userId: args.data.userId
                })

                return expense.save()
            }
        },


        // * DELETE EXPENSE

        deleteExpense: {
            type: ExpensesType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                return Expenses.findByIdAndRemove(args.id)
            }
        },


        // * UPDATE EXPENSE

        updateExpense: {
            type: ExpensesType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
                data: { type: ExpensesInputType }
            },
            resolve(parent, args) {
                return Expenses.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            title: args.data.title,
                            paidWith: args.data.paidWith,
                            paidBy: args.data.paidBy,
                            amount: args.data.amount,
                            userId: args.data.userId
                        }
                    },
                    { new: true }
                )
            }
        },


        // * LOGIN

        userLogin: {
            type: UsersType,
            args: {
                data: { type: UserInputType }
            },
            resolve: async (parent, args, req, res) => {

                const username = args.data.username
                const user = await Users.findOne({ username })
                const match = await bcrypt.compare(args.data.pw, user.hashedPw)

                if (match) {
                    return user
                } else {
                    return null
                }

            }
        },
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})