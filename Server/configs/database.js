const mongoose = require('mongoose')
const connectDB = () => {
    const path = "mongodb://localhost:27017/StudentsDB"//connecting the project to the database using mongoose
    mongoose.connect(path)
}
module.exports = connectDB;