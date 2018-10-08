const express = require('express');
const cors = require('cors');
const monk = require('monk');
const Filter = require('bad-words');
const rateLimit = require("express-rate-limit");

const app = express();
const db = monk(process.env.MONGO_URI);
const posts = db.get('posts');
const filter = new Filter();

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.json({
    message: 'Server GET res'
  })
})

// GET all posts
app.get('/posts', (req, res) => {
  posts
    .find()
    .then(posts => {
      res.json(posts);
    });
});

function isValidPost(post) {
  return post.name && post.name.toString().trim() !== '' &&
    post.content && post.content.toString().trim() !== '';
}

app.use(rateLimit({
  windowMs: 30 * 1000,
  max: 1
}))

app.post('/posts', (req, res) => {
  if(isValidPost(req.body)) {
    const post = {
      name: filter.clean(req.body.name.toString()),
      content: filter.clean(req.body.content.toString()),
      created: new Date()
    };
    //insert into db
    posts
      .insert(post)
      .then(createdPost => {
        res.json(createdPost);
      });

  } else {
    res.status(422)
    res.json({
      message: 'Name and content are required'
    })
  }
})

//start server
app.listen(5000, () => {
  console.log('Listening on http://localhost:5000')
});