const mongoose = require('mongoose')//linking mongoose to the file
const Schema = mongoose.Schema;
const studentSchema = new Schema({  //Creating the Schema for the new objects in the database.
    fullName: String,
    email: String,
    faculty: String,
    birthDate: Date,
    grades: [{name:String,date:Date,grade:String}]
})
// exporting the Schema so it can be used in other files
module.exports = mongoose.model('studentsdbs', studentSchema)