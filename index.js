import express from "express"
import cors from "cors"

import { Task } from "./models.js"

const app = express()
const port = 3000

app.use(cors());
app.use(express.json())

// sample DB object (sample data)
const sampleTask = {
  taskName: "Do the dishes",
  taskCategory: "House Shores",
  deadline: "today",
  priotiy: 10
}

app.get('/hello', (req, res) => {
  res.send('Hello World!');
})

app.get('/sampleTask', (req, res) => {
  res.send(JSON.stringify(sampleTask));
})

app.post('/newTask', (req, res) => {
  console.log(req.body)
  res.send(JSON.stringify("task received!"))
})

app.listen(port, () => console.log(`Server listening on ${port}`));


