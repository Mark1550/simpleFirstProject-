const express = require('express')//Linking express package to the file
const studentBL = require('../models/studentBL') //linking studentBL to this file so it will be possible to use it's functions

const router = express.Router()//creating a router using express

router.route('/').get(async (req, res) => {//declering the route for the GET method | a function that gets all the students
    try {
        const students = await studentBL.getAllStudents();
        return res.json(students)
    }
    catch (error) {
        return res.json(error)
    }
})

router.route('/:id').get(async (req, res) => {// declering the route for the GET method by id | a functoin that gets a student by it's ID
    try {
        const id = req.params.id;
        const student = await studentBL.getStudentById(id)
        return res.json(student)
    }
    catch (error) {
        return res.json(error)
    }
})

router.route('/').post(async (req, res) => {//declering the route for the POST method | a functoin that adds a student to the database
    const newStudent = req.body;
    console.log(newStudent);
    const result = await studentBL.addStudent(newStudent).catch(err => console.log(err))
    return res.json(result)
})

router.route('/:id').put(async (req, res) => {//declering the route for the PUT method | a function that updates a student in the database by it's ID
    try {
        const id = req.params.id;
        const updatedStudent = req.body;
        const result = await studentBL.updateStudent(id, updatedStudent)
        return res.json(result)
    }
    catch (error) {
        return res.json(error)
    }
})

router.route('/:id').delete(async (req, res) => {//declering the route for the DELETE method | a function that deletes a student by it's ID
    try {
        const id = req.params.id;
        const result = await studentBL.deleteStudent(id);
        return res.json(result)
    }
    catch (error) {
        return res.json(error)
    }
})

module.exports = router;