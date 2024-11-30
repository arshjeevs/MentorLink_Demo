const mongoose = require('mongoose');

const MentorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    expertise: { type: [String], required: true },
    bio: { type: String, required: false },
    availability: { type: [String], required: false }, // Array of available time slots or days
}, { timestamps: true });

module.exports = mongoose.model('Mentor', MentorSchema);
