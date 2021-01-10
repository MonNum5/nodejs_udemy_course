const express = require('express');

const inputData = require('./userInput.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  const namesList = inputData.namesList;
  res.render('userList', {
    namesList: namesList,
    pageTitle: 'User List',
    path: '/'
  });
});

module.exports = router;
