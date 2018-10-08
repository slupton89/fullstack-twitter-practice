const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Server GET res'
  })
})

function isValidPost(post) {
  return post.name && post.name.toString().trim() !== '' &&
    post.content && post.content.toString().trim() !== '';
}

app.post('/posts', (req, res) => {
  if(isValidPost(req.body)) {
    //insert into db
  } else {
    res.status(422)
    res.json({
      message: 'Name and content are required'
    })
  }
})

app.listen(5000, () => {
  console.log('Listening on http://localhost:5000')
});