const { User, Purchases } = require("../models")
const { AuthenticationError } = require('apollo-server-express');
const {signToken} = require('../utils/auth')

const resolvers = {
  
    Query: {
        me: async (parent,args,context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('purchases');

                return userData;
            }

        throw new AuthenticationError('Not logged in');
        },
        users: async() => { //print all the users in db
            return User.find()
                    .select('-__v -password')
                    .populate('purchases')
        },
        user: async (parent, { email }) => {
            return User.findOne({ email })
                .select('-__v -password')
                .populate('purchases')
        },
        purchases: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Purchases.find(params).sort({created:-1})
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return {token, user};
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return {token, user};
        },
        addPurchase: async (parent, args, context) => {
            if (context.user) {//someone is logged in 
                const purchase = await Purchases.create({ ...args, username: context.user.username })
                
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { purchases: purchase._id } },
                    { new: true }
                    );
                return purchase;
            }
            
            throw new AuthenticationError('You need to be logged in!');

        }
        
    }
};

module.exports = resolvers;