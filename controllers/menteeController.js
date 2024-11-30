const Mentee = require('../models/Mentee');

// Get all mentees
exports.getMentees = async (req, res) => {
    try {
        const mentees = await Mentee.find();
        res.status(200).json(mentees);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching mentees', error: err.message });
    }
};

// Get a single mentee profile
exports.getMenteeProfile = async (req, res) => {
    try {
        const mentee = await Mentee.findById(req.params.id);
        if (!mentee) {
            return res.status(404).json({ message: 'Mentee not found' });
        }
        res.status(200).json(mentee);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching mentee profile', error: err.message });
    }
};

// Create a new mentee profile
exports.createMenteeProfile = async (req, res) => {
    const { name, email, interests, goals } = req.body;

    try {
        const newMentee = new Mentee({
            name,
            email,
            interests,
            goals,
        });

        const savedMentee = await newMentee.save();
        res.status(201).json(savedMentee);
    } catch (err) {
        res.status(500).json({ message: 'Error creating mentee profile', error: err.message });
    }
};

// Update an existing mentee profile
exports.updateMenteeProfile = async (req, res) => {
    try {
        const mentee = await Mentee.findById(req.params.id);
        if (!mentee) {
            return res.status(404).json({ message: 'Mentee not found' });
        }

        // Update fields
        mentee.name = req.body.name || mentee.name;
        mentee.email = req.body.email || mentee.email;
        mentee.interests = req.body.interests || mentee.interests;
        mentee.goals = req.body.goals || mentee.goals;

        const updatedMentee = await mentee.save();
        res.status(200).json(updatedMentee);
    } catch (err) {
        res.status(500).json({ message: 'Error updating mentee profile', error: err.message });
    }
};
