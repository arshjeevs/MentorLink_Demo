const express = require('express');
const {
    getMentees,
    getMenteeProfile,
    updateMenteeProfile,
    createMenteeProfile,
} = require('../controllers/menteeController');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// Route to get all mentees (admin only or public)
router.get('/', protect, getMentees);

// Route to get a specific mentee profile by ID
router.get('/:id', protect, getMenteeProfile);

// Route to create a new mentee profile
router.post('/', protect, createMenteeProfile);

// Route to update an existing mentee profile
router.put('/:id', protect, updateMenteeProfile);

module.exports = router;
