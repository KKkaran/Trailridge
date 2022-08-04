const resolvers = {
  
    Query: {
    helloSodhi: () => {
      return 'Hey bro wassup you gooood';
        },
    goodBye: () => {
      return 'good bye mr sodhi';
    }
  }
};

module.exports = resolvers;