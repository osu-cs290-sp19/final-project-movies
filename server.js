/*
 * Write your server code in this file.
 *
 * names: Margaret Walters & Nora Quick
 */



//make all of the variables that are needed
var url = require('url');
var fs = require('fs');
var http = require('http');


//PRINT OUT EACH TIME (ONLY ONCE FOR EACH) THAT I USE READFILESYNC FOR FILES
var mainIndexdata = fs.readFileSync('public/mainIndex.html');
console.log("mainIndex.html has been read:))");
var indexjsdata = fs.readFileSync('public/index.js');
console.log("index.js has been read:)");
var styledata = fs.readFileSync('public/style.css');
console.log("style has been read:)");
var data404 = fs.readFileSync('public/404.html');
console.log("404 has been read:)");
var dataAA = fs.readFileSync('public/A-A.html');
console.log("A-A has been read:)");
var dataAR = fs.readFileSync('public/A-R.html');
console.log("A-R has been read:)");
var dataHorror = fs.readFileSync('public/Horror.html');
console.log("Horror has been read:)");
var dataSuperHero = fs.readFileSync('public/SuperHero.html');
console.log("SuperHero has been read:)");
var dataWestern = fs.readFileSync('public/Western.html');
console.log("Western has been read:)");
var dataRRC = fs.readFileSync('public/R-RC.html');
console.log("R-RC has been read:)");

//FUNCTION REQUEST HANDLER
function requestHandler(req, res){
  console.log("Inside of requestHandler!");
  var styledata = fs.readFileSync('public/style.css');
        //default circumstance for just '/ leads to index.html
        if(req.url === '/'){
          //header must be wet for html files
          res.setHeader("Content-Type", "text/html");

          console.log("They just typed a slash, so index.html");
          res.statusCode = 200;
          res.write(mainIndexdata);
        }
        //if they want to get the index.html
        else if(req.url === '/mainIndex.html'){
          //header must be wet for html files
          res.setHeader("Content-Type", "text/html");

          console.log("They wanted /index.html");
          res.statusCode = 200;
          res.write(mainIndexdata);
        }
        //if they want AA
        else if(req.url === '/A-A.html'){
          //header must be wet for html files
          res.setHeader("Content-Type", "text/html");

          console.log("They typed /A-A.html");
          res.statusCode = 200;
          res.write(dataAA);
        }
        //if they want AR
        else if(req.url === '/A-R.html'){
          //header must be wet for html files
          res.setHeader("Content-Type", "text/html");

          console.log("They typed /A-R.html");
          res.statusCode = 200;
          res.write(dataAR);
        }
        //if they want Horror
        else if(req.url === '/Horror.html'){
          //header must be wet for html files
          res.setHeader("Content-Type", "text/html");

          console.log("They typed /Horror.html");
          res.statusCode = 200;
          res.write(dataHorror);
        }
        //if they want SuperHero
        else if(req.url === '/SuperHero.html'){
          //header must be wet for html files
          res.setHeader("Content-Type", "text/html");

          console.log("They typed /SuperHero.html");
          res.statusCode = 200;
          res.write(dataSuperHero);
        }
        //if they want Western
        else if(req.url === '/Western.html'){
          //header must be wet for html files
          res.setHeader("Content-Type", "text/html");

          console.log("They typed /Western.html");
          res.statusCode = 200;
          res.write(dataWestern);
        }
        //if they want R-RC
        else if(req.url === '/R-RC.html'){
          //header must be wet for html files
          res.setHeader("Content-Type", "text/html");

          console.log("They typed /R-RC.html");
          res.statusCode = 200;
          res.write(dataRRC);
        }
        //if they want to get the style.css
        else if(req.url === '/style.css'){
          //header must be set to css files
          res.setHeader("Content-Type", "text/css")

          console.log("They wanted style.css");
          res.statusCode = 200;
          res.write(styledata);
        }
        //if they want to get the index.js
        else if (req.url === '/index.js'){
          //header has to be for js
          res.setHeader("Content-Type", "application/javascript")

          console.log("They wanted index.js");
          res.statusCode = 200;
          res.write(indexjsdata);
        }
        //if they want to get the 404 html
        else if(req.url === '/404.html'){
          //header must be wet for html files
          res.setHeader("Content-Type", "text/html");

          console.log("They wanted a 404 code");
          res.statusCode = 404;
          res.write(data404);
        }
        //if they put in some garbage
        else {
          //header must be wet for html files
          res.setHeader("Content-Type", "text/html");

          console.log("gibberish was put in");
          res.statusCode = 404;
          res.write(data404);
        }
        res.end();
}
//make server variable
var server = http.createServer(requestHandler);
process.env.PORT = 3305;
var port = process.env.PORT;

server.listen(port, function() {
  console.log("Server 3305 is listening");
});

/******************************************************************/

/*var path = require('path');
var express = require('express');
var exphandle = require('express-handlebars');

var postdata = require('./postData');

var app = express();
var port = process.env.PORT || 3305;

app.engine('handlebars', exphandle({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function (req, res, next){
  res.status(200).render('main'/*, {post:postData, dispMod:false});
});

app.get('/posts/:genre', function(req, res, next){
  if(postData[req.params.genre]){
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
*/

/******************************************************************/
