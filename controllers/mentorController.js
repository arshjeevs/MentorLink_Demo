const Mentor = require('../models/Mentor');

// Get all mentors
exports.getMentors = async (req, res) => {
    try {
        const mentors = await Mentor.find();
        res.status(200).json(mentors);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching mentors', error: err.message });
    }
};

// Get a single mentor profile
exports.getMentorProfile = async (req, res) => {
    try {
        const mentor = await Mentor.findById(req.params.id);
        if (!mentor) {
            return res.status(404).json({ message: 'Mentor not found' });
        }
        res.status(200).json(mentor);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching mentor profile', error: err.message });
    }
};

// Create a new mentor profile
exports.createMentorProfile = async (req, res) => {
    const { name, email, expertise, bio, availability } = req.body;

    try {
        const newMentor = new Mentor({
            name,
            email,
            expertise,
            bio,
            availability,
        });

        const savedMentor = await newMentor.save();
        res.status(201).json(savedMentor);
    } catch (err) {
        res.status(500).json({ message: 'Error creating mentor profile', error: err.message });
    }
};

// Update an existing mentor profile
exports.updateMentorProfile = async (req, res) => {
    try {
        const mentor = await Mentor.findById(req.params.id);
        if (!mentor) {
            return res.status(404).json({ message: 'Mentor not found' });
        }

        // Update fields
        mentor.name = req.body.name || mentor.name;
        mentor.email = req.body.email || mentor.email;
        mentor.expertise = req.body.expertise || mentor.expertise;
        mentor.bio = req.body.bio || mentor.bio;
        mentor.availability = req.body.availability || mentor.availability;

        const updatedMentor = await mentor.save();
        res.status(200).json(updatedMentor);
    } catch (err) {
        res.status(500).json({ message: 'Error updating mentor profile', error: err.message });
    }
};
