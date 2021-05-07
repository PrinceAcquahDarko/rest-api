const express = require('express');
const mongoose = require('mongoose')
const User = require('./model')
const Userrotuer = require('./routes/routes')(User)


//Hey It works fine 😊 u can chk the live link 
const url = 'mongodb+srv://<username>:<password>@cluster0.xbklg.mongodb.net/zuri?retryWrites=true&w=majority'
//connect to db

mongoose.connect(url,  { useUnifiedTopology: true,  useNewUrlParser: true })
    .then((data) => console.log('connected to database successfully'))
    .catch(err => console.log(err))

//initialize express()
const app = express()

//initialize express middleware
app.use(express.json({extended: false}))

app.use('/', Userrotuer)

//configure PORT
const PORT = process.env.PORT || 9000


//start the server
app.listen(PORT, ()=> console.log('listening on port 2000'))
