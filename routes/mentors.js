const express = require('express');
const {
    getMentors,
    getMentorProfile,
    updateMentorProfile,
    createMentorProfile,
} = require('../controllers/mentorController');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// Route to get all mentors (admin only or public)
router.get('/', getMentors);

// Route to get a specific mentor profile by ID
router.get('/:id', protect, getMentorProfile);

// Route to create a new mentor profile
router.post('/', createMentorProfile);

// Route to update an existing mentor profile
router.put('/:id', protect, updateMentorProfile);

module.exports = router;
