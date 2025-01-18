const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST route for login
router.post('/login', authController.login);

module.exports = router;
