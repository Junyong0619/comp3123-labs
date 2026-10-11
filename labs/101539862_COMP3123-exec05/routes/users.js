const express = require('express');
const router= express.Router();
const user = require('../user.json');


router.get('/profile', (req,res) => {
  res.json(user);
});



router.post('/login', (req,res) => {
    const { username, password } = req.body;

  if (username !== user.username) {
    return res.json({ status: false, message: 'User Name is invalid' });
  }
  if (password !== user.password) {
    return res.json({ status: false, message: 'Password is invalid' });
  }
  res.json({ status: true, message: 'User Is valid' });
});


router.get('/logout/:username', (req,res) => {
    const { username } = req.params;
    res.send(`<b>${username} successfully logged out.</b>`);
});

module.exports = router;