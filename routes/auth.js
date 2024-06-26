const express = require('express');
const router = express.Router();

// const {userSignupValidator} = require('../validator');

const {signup, signin, signout,updatepassword} = require('../controllers/auth');

// router.post('/signup', userSignupValidator, signup);
router.post('/signup',  signup);
router.post('/signin', signin);
router.get('/signout', signout);
router.post('/updatepassword', updatepassword);

module.exports = router;
