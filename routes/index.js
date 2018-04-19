const express = require('express');
const router = express.Router();
const tweetBank = require("../tweetBank");

router.get('/', (req, res)=>{
  let tweets = tweetBank.list();
  res.render("index", {tweets: tweets});
});

router.get('/news', (req, res)=>{
  res.send('hey');
})

module.exports = router;

// app.use('/', (req, res, next) => {
//   console.log(req.method, req.url);
//   console.log(req);
//   next();
// })
