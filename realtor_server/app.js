const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000
const NODE_ENV = process.env.NODE_ENV || 'Dev'
const loginRouter = require('./routes/realtordb-router');
const app = express()


app.use(logger('dev'))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/users', loginRouter);
app.use('/api', loginRouter);


app.use('/', (req, res) => {
    res.send("hello");
})

app.listen(PORT, () => {
 console.log(`server is listening on port ${PORT}`)
})
console.log(`Developing on ${NODE_ENV} enironment`)