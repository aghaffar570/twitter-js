// Logistics Setup
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

// Misc
let locals = {
  title: "Wizards in Harry Potter",
  people: [
    {name: "Gandalf"},
    {name: "Frodo"},
    {name: "Hermione"}
  ]
};

// Nunjucks Stuff
nunjucks.configure("views", {noCache: true});
nunjucks.render("index.html", locals, function(err, output) {
  console.log(output);
})

app.set("view engine", "html");
app.engine("html", nunjucks.render);
nunjucks.configure("views");

// App Stuff
app.use('/', (req, res, next) => {
  console.log(req.method, req.url);
  console.log(req);
  next();
})

app.get('/', (req, res)=>{
  res.render("index", locals);
})

app.get('/news', (req, res)=>{
  res.send('hey');
})


app.listen(3000, () => {
  console.log('serving listening');
})
