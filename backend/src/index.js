const express = require('express')
const cors = require('cors')
const app = express()
const userRoute = require('./routes/user')
const postsRoute = require('./routes/post')
const InfoRoute = require('./routes/info')
const CommentRoute = require('./routes/comment')

require('dotenv').config()

require('./database')

app.use(express.json())
app.use(cors())
app.options('*', cors())

app.use('/posts', postsRoute)
app.use('/login', userRoute)
app.use('/users', InfoRoute)
app.use('/comments', CommentRoute)

app.listen(process.env.PORT || 3001, () => console.log('Conectado!'))
