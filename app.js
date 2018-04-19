const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

let locals = {
  title: "An Example",
  people: [
    {name: "Gandalf"},
    {name: "Frodo"},
    {name: "Hermione"}
  ]
};

nunjucks.configure("views", {noCache: true});
nunjucks.render("index.html", locals, function(err, output) {
  console.log(output);
})

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
