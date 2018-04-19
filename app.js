const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
  console.log(req.method, req.url);
  console.log(req);
  next();
})


app.get('/', (req, res)=>{
  res.send('hi')
})

app.get('/news', (req, res)=>{
  res.send('hey')
})


app.listen(3000, () => {
  console.log('serving listening');
})
