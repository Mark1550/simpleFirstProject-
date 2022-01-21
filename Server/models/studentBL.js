const studentModel = require('./studentModel')//linking the studentModel file to this file 

const getAllStudents = () => {//a function that gets all the students
    return new Promise((resolve, reject) => {
        studentModel.find({}, (err, data) => {
            if (err)
                reject(err)
            else
                resolve(data)
        })
    })
}

const getStudentById = (id) => {// a function that gets a student by it's ID
    return new Promise((resolve, reject) => {
        studentModel.findById(id, (err, data) => {
            if (err)
                reject(err)
            else
                resolve(data)
        })
    })
}

const addStudent = (newStudent) => {// a function that adds a student to the database
    return new Promise((resolve, reject) => {
        const student = new studentModel(newStudent)
        student.save((err) => {
            if (err)
                reject(err)
            else
                resolve("Student was added successfully")
        })
    })
}

const updateStudent = (id, updatedStudent) => {// a function that updates a student in the database by it's ID
    return new Promise((resolve, reject) => {
        studentModel.findByIdAndUpdate(id, updatedStudent, (err) => {
            if (err)
                reject(err)
            else
                resolve("Student was updated successfully")
        })
    })
}

const deleteStudent = (id) => {// a function that deletes a student by it's ID
    return new Promise((resolve, reject) => {
        studentModel.findByIdAndDelete(id, (err) => {
            if (err)
                reject(err)
            else
                resolve("Student was deleted successfully")
        })
    })
}

// exporting all the functions so they can be used in the router file.
module.exports = { getAllStudents, getStudentById, addStudent, updateStudent, deleteStudent, }