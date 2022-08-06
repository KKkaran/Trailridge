const { gql } = require('apollo-server-express')

const typeDefs = gql`

    type Query{
        me:User,
        users:[User]
        user(email:String!):User
        purchases(username:String):[Purchase]
    }
    type Purchase{
        _id: ID,
        description: String,
        price:String
        createdAt: String,
        username:String
    }
    type User{
        _id: ID
        username:String,
        email:String,
        password:String,
        purchases: [Purchase]
    }
    type Auth{
        token: ID!
        user:User
    }


    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addPurchase(description:String!, price:String!): Purchase
    }


    

`

module.exports = typeDefs;