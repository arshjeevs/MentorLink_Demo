const Contact = require('../models/Contact');

exports.submitContactForm = async (req, res) => {
    try {
        const { name, email, phone, message, category } = req.body;

        console.log('Received request body:', req.body);
        
        // Validation
        const missingFields = [];
        if (!name) missingFields.push('name');
        if (!email) missingFields.push('email');
        if (!phone) missingFields.push('phone');
        if (!message) missingFields.push('message');
        if (!category) missingFields.push('category');

        if (missingFields.length > 0) {
            console.log('Missing fields:', missingFields);
            return res.status(400).json({ 
                success: false,
                message: `Missing required fields: ${missingFields.join(', ')}` 
            });
        }

        const contactEntry = new Contact({ 
            name, 
            email, 
            phone,
            message, 
            category 
        });

        console.log('Attempting to save contact:', contactEntry);

        const savedContact = await contactEntry.save();
        console.log('Successfully saved contact:', savedContact);

        return res.status(200).json({ 
            success: true,
            message: 'Contact form submitted successfully',
            data: savedContact
        });
    } catch (error) {
        console.error('Error in submitContactForm:', error);
        return res.status(500).json({ 
            success: false,
            message: 'Internal server error',
            error: error.message,
            stack: error.stack
        });
    }
};
