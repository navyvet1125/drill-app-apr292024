import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Returns a message with the name provided in the URL
app.get('/:name', (req, res) => {
    let name = req.params.name;
    res.json({message:`Hello, ${name}!`});
})

// Returns a message with the isTyping status provided in the URL
app.get('/typing/:isTyping', (req, res) => {
    let isTyping = req.params.isTyping;
    console.log(isTyping);
    res.status(200).json({isTyping});
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})