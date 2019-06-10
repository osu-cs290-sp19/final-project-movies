/*
 * Write your server code in this file.
 *
 * names: Margaret Walters & Nora Quick
 */

var path = require('path');
var express = require('express');
var exphandle = require('express-handlebars');

//var postdata = require('./postData');

var app = express();
var port = process.env.PORT || 3305;

app.engine('handlebars', exphandle({ defaultLayout: '/views/main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function (req, res, next){
  res.status(200).render('/views/main');
});

app.get('/posts/:genre', function(req, res, next){
  var genre = req.params.genre.toLowerCase();
  if(postData[req.genre]){
    res.status(200).render('multPosts', {post:[postData[req.params.genre]], desplayMod: true});
  } else {
    res.status(404).render('404');
  }
});

app.get('*', function (req, res, next){
  res.status(404).render('404');
});

app.listen(port, function (){
  console.log("== Server is listening to port", port);
});
