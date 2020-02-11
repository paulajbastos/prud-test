// Set up ======================================================================
// get all the tools we need
import express from 'express';
import http from 'http';
import path from 'path';

require('dotenv').config();

//setup port
const port = process.env.PORT || 3000;

// Configuration ===============================================================

//setup express app
const app = express();

app.use(function (req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
});

const buildPath = path.join(__dirname, 'dist');
app.set('port', process.env.PORT || 8080);
app.set("view options", { layout: false });
app.use(express.static(buildPath));


app.get('/*', function (req, res) {
  if (req.xhr) {
    var pathname = url.parse(req.url).pathname;
    res.sendFile('index.html', { root: buildPath + pathname });
  } else {
    res.sendFile('index.html', { root: buildPath + '/' });
  }
});


// launch ======================================================================
// Starts the Express server on port 3001 and logs that it has started
http.createServer(app).listen(port, () => {
  console.log(`Express server started at: http://localhost:${port}/`); // eslint-disable-line no-console
});



module.exports = app;
