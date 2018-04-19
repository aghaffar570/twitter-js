// Logistics Setup
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const routes = require("./routes/index.js");

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
app.use("/", routes);

app.listen(3000, () => {
  console.log('serving listening');
})
