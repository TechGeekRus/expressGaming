const express = require('express')
const logger = require('morgan')
const index = require('./router/index')
const game = require('./router/game')

const app = express()

app.use(logger('dev'))
app.use(express.json())

app.use('/', index)
app.use('/api/game', game)

app.listen(3000, ()=>{
    console.log('Server Started on port 3000!')
})