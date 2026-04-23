const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Contact = require('./models/Contact');
const Service = require('./models/Service');
const Pricing = require('./models/Pricing');
const Testimonial = require('./models/Testimonial');
const FAQ = require('./models/FAQ');
const Team = require('./models/Team');
const Blog = require('./models/Blog');

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB Successfully'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err));


const generateCRUDRoutes = (model, modelName, path) => {
    app.post(`/api/${path}`, async (req, res) => {
        try {
            const newItem = new model(req.body);
            await newItem.save();
            res.status(201).json({ success: true, message: `${modelName} created!`, data: newItem });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    });

    app.get(`/api/${path}`, async (req, res) => {
        try {
            const items = await model.find().sort({ createdAt: -1 });
            res.json(items);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    app.get(`/api/${path}/:id`, async (req, res) => {
        try {
            const item = await model.findById(req.params.id);
            if (!item) return res.status(404).json({ error: 'Not found' });
            res.json(item);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    app.put(`/api/${path}/:id`, async (req, res) => {
        try {
            const updatedItem = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedItem) return res.status(404).json({ error: 'Not found' });
            res.json({ success: true, message: `${modelName} updated!`, data: updatedItem });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    app.delete(`/api/${path}/:id`, async (req, res) => {
        try {
            const deletedItem = await model.findByIdAndDelete(req.params.id);
            if (!deletedItem) return res.status(404).json({ error: 'Not found' });
            res.json({ success: true, message: `${modelName} deleted!` });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
};

generateCRUDRoutes(Blog, 'Blog', 'blogs');
generateCRUDRoutes(Service, 'Service', 'services');
generateCRUDRoutes(Pricing, 'Pricing', 'pricing');
generateCRUDRoutes(Testimonial, 'Testimonial', 'testimonials');
generateCRUDRoutes(FAQ, 'FAQ', 'faqs');
generateCRUDRoutes(Team, 'Team', 'team');

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) return res.status(400).json({ error: 'All fields are required' });
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ success: true, message: 'Form submitted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/contact', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/api/contact/:id', async (req, res) => {
    try {
        await Contact.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: 'Contact deleted!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
