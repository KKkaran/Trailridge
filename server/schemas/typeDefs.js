const { gql } = require('apollo-server-express')

const typeDefs = gql`

    type Query{
        helloSodhi: String
        goodBye: String
    }

`

module.exports = typeDefs;