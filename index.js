import { database } from "./database.js"

import express from "express"
// const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/tasks', (req, res) => {
    if (database.tasks.length == 0) {
        console.log("if entered!")
        res.send('There are no tasks yet')
    } 
    else {
        console.log("else entered!")
        res.send(database.tasks)
    }
})

app.post('/task', (req, res) => {
    const taskAmount = database.tasks.length;
    const newTaskNumber = taskAmount + 1;
    database.tasks.push(`task item ${newTaskNumber}`);
    res.json(database.tasks); // send proper JSON back
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
