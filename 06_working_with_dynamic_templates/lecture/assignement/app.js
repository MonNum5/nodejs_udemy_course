const express = require("express")

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const userList = require('./routes/userList');
const userInput = require('./routes/userInput.js');


app.use(bodyParser.urlencoded({ extended: false }));


app.use(userList);
app.use(userInput.routes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);