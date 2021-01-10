const express = require('express');

const router = express.Router();

const namesList = [];

// /admin/add-product => GET
router.get('/user-input', (req, res, next) => {
  res.render('UserInput', {
    pageTitle: 'User Input',
  });
});

// /admin/add-product => POST
router.post('/user-input', (req, res, next) => {
  namesList.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.namesList = namesList;