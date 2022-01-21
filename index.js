const express = require('express')//linking the express package
const cors = require('cors') //linking the cors package
const connectDB = require('./Server/configs/database') //linking the database to the file
const studentRouter = require('./Server/routers/studentRouter') //linking the router to the file

const app = express(); //middleware
const port = 1550; //Declering the port number
connectDB(); //connecting to the database

app.use(cors());//middleware
app.use(express.json());//middleware
app.use(express.urlencoded({ extended: true }));//middleware

app.use('/studentsdbs', studentRouter) // connecting the file to the router

app.listen(port, () => { // listening the server to the port that was declered
    console.log(`server is listening at http://localhost:${port}`)
})
