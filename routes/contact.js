const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controllers/contactController');

// Route for contact form submission
router.post('/', submitContactForm);

module.exports = router;
