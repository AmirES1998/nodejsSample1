const graphql = require('graphql') ; 
const {GraphQLSchema} =  graphql ; 
// root query 

const query = require('./root_query') ;

module.exports = new GraphQLSchema({query}) ;