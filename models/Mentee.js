const mongoose = require('mongoose');

const MenteeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    interests: { type: [String], required: false },
    goals: { type: [String], required: false },
}, { timestamps: true });

module.exports = mongoose.model('Mentee', MenteeSchema);
