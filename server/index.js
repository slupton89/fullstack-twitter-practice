const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Server GET res'
  })
})

app.post('/posts', (req, res) => {
  console.log(req.body);
})

app.listen(5000, () => {
  console.log('Listening on http://localhost:5000')
});