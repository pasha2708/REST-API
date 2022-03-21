import express from 'express'
import mongoose from 'mongoose'
import Post from './Post.js'

const PORT = 5000
const DB_URL = 'mongodb+srv://user:user1@cluster0.37bro.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()

app.use(express.json())

app.post('/', async (req, res) => {
  const {author, title, content, picture} = req.body
  const post = await Post.create({author, title, content, picture})
  res.json(post)
})

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
    app.listen(PORT, () => {
      console.log("started")
    })
  } catch (e) {
    console.log(e);
  }
}

startApp()
