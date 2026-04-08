const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Contact = require('./models/Contact');
const Service = require('./models/Service');
const Pricing = require('./models/Pricing');
const Testimonial = require('./models/Testimonial');
const FAQ = require('./models/FAQ');

const app = express();


// MIDDLEWARE
app.use(cors());
app.use(express.json());


// MONGODB CONNECTION
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB Successfully'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err));


// ROUTES
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newContact = new Contact({ name, email, message });
        await newContact.save();

        res.status(201).json({ 
            success: true, 
            message: 'Form submitted successfully!' 
        });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET SERVICES
app.get('/api/services', async (req, res) => {
    try {
        const services = await Service.find().sort({ id: 1 });
        res.json(services);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET PRICING
app.get('/api/pricing', async (req, res) => {
    try {
        const pricing = await Pricing.find();
        res.json(pricing);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET TESTIMONIALS
app.get('/api/testimonials', async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.json(testimonials);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET FAQS
app.get('/api/faqs', async (req, res) => {
    try {
        const faqs = await FAQ.find();
        res.json(faqs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
