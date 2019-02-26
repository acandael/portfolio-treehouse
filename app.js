const express = require('express');
const app = express();
const data = require('./data.json');

// set up view engine
app.set('view engine', 'pug');

// static routes
app.use('/static', express.static('public'));

// routes
app.get('/', (req, res) => {
  res.render('index', { data });
});

// Error Handling
//404 error for routes that are not found
app.use((req, res, next) => {
  const err = new Error('Page Not Found ');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.render('error'); //error.pug
});

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Server is running on port: ${PORT}`);
});