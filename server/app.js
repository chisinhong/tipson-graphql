const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// connect to mlab database
// make sure to replace my db string & creds with your own
mongoose.connect('mongodb://perry:perry123@ds245082.mlab.com:45082/tipson-graphql')
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () =>{
    console.log('now listen on 4000');
})