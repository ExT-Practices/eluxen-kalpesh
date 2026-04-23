const mongoose = require('mongoose');
require('dotenv').config();

const Service = require('./models/Service');
const Pricing = require('./models/Pricing');
const Testimonial = require('./models/Testimonial');
const FAQ = require('./models/FAQ');
const Team = require('./models/Team');
const Blog = require('./models/Blog');


const services = [
    {
        id: "01",
        title: "Exterior Detailing",
        description: "Shine, protect, restore paint.",
        image: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: "02",
        title: "Interior Detailing",
        description: "Deep Clean, Fresh feel",
        image: "https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: "03",
        title: "Engine Bay Cleaning",
        description: "Long-lasting, high-glass protection.",
        image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: "04",
        title: "Paint Correction",
        description: "Eliminate swirls, restore clarity.",
        image: "https://images.unsplash.com/photo-1507136566006-bb91e5d1ad29?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: "05",
        title: "Ceramic Coating",
        description: "Advanced paint protection.",
        image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: "06",
        title: "Headlight Restoration",
        description: "Clear up foggy headlights.",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000",
    },
];


const plans = [
    {
        name: "Basic",
        description: "Perfect for regular upkeep and light cleaning",
        price: "49",
        features: [
            "Exterior hand wash & dry.",
            "Interior vacuuming.",
            "Windows cleaned inside & out.",
            "Light interior wipe-down."
        ]
    },
    {
        name: "Premium",
        description: "Ideal for deeper cleaning and added shine",
        price: "79",
        features: [
            "Wax application",
            "Deep interior cleaning.",
            "Upholstery & carpet shampoo.",
            "Dashboard & console detailing."
        ]
    },
    {
        name: "Ultimate",
        description: "Showroom-ready finish with complete care",
        price: "199",
        features: [
            "Engine bay cleaning.",
            "Leather conditioning.",
            "Paint sealant protection.",
            "Headlight restoration."
        ]
    }
];

const testimonials = [
    {
        quote: "I couldn't believe the transformation. I brought in my SUV after a long road trip with kids, pets, and plenty of wear and tear. When I picked it up, it looked and smelled like it just came off the showroom floor. Every surface was spotless, the paint had an incredible shine, and even the smallest crevices were cleaned to perfection.",
        name: "Alina James",
        role: "Happy Client",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
    },

    {
        quote: "Absolutely phenomenal service! The team was highly professional and treated my car as if it was their own. The interior feels brand new, and the exterior detail is flawless. I highly recommend them to anyone who wants top-tier care for their vehicle in record time.",
        name: "Michael Smith",
        role: "Regular Customer",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        quote: "Outstanding experience start to finish. I've used several auto detailing services before, but none compare to the attention to detail provided here. The ceramic coating they applied looks amazing. My car has never looked this good since I bought it.",
        name: "Sarah Jenkins",
        role: "Car Enthusiast",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
];

const faqData = [
    {
        question: "How long does a full detail take?",
        answer: "Very easy! Our solutions are built with flexibility in mind and offer seamless integration with most major platforms and CRMs. Our support team will guide you through the process to ensure a smooth setup."
    },
    {
        question: "What's the difference between a car wash & a detail?",
        answer: "Very easy! Our solutions are built with flexibility in mind and offer seamless integration with most major platforms and CRMs. Our support team will guide you through the process to ensure a smooth setup."
    },
    {
        question: "How often should I get my car detailed?",
        answer: "Very easy! Our solutions are built with flexibility in mind and offer seamless integration with most major platforms and CRMs. Our support team will guide you through the process to ensure a smooth setup."
    },
    {
        question: "What's included in a full car detail?",
        answer: "Very easy! Our solutions are built with flexibility in mind and offer seamless integration with most major platforms and CRMs. Our support team will guide you through the process to ensure a smooth setup."
    },
    {
        question: "How long does a full car detailing service take?",
        answer: "Very easy! Our solutions are built with flexibility in mind and offer seamless integration with most major platforms and CRMs. Our support team will guide you through the process to ensure a smooth setup."
    },
    {
        question: "Do I need to make an appointment?",
        answer: "We offer flexible pricing tiers — Starter, Growth, and Enterprise — to suit businesses of all sizes. Each plan includes different levels of features, data usage, and support."
    },
    {
        question: "What's the difference between a car wash & a full detail?",
        answer: "Very easy! Our solutions are built with flexibility in mind and offer seamless integration with most major platforms and CRMs. Our support team will guide you through the process to ensure a smooth setup."
    },
    {
        question: "Is detailing safe for my car’s paint and interior?",
        answer: "Very easy! Our solutions are built with flexibility in mind and offer seamless integration with most major platforms and CRMs. Our support team will guide you through the process to ensure a smooth setup."
    }
];

const teamMembers = [
    {
        name: "Jason Reed",
        role: "Lead Detailer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
        delay: "0.3s",
        socials: { fb: "https://www.facebook.com/login/", ig: "https://www.instagram.com/", li: "https://www.linkedin.com/" }
    },
    {
        name: "Samantha Lee",
        role: "Relations Manager",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
        delay: "0.5s",
        socials: { fb: "https://www.facebook.com/login/", ig: "https://www.instagram.com/", li: "https://www.linkedin.com/" }
    },
    {
        name: "Miguel Torres",
        role: "Paint Correction",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
        delay: "0.6s",
        socials: { fb: "https://www.facebook.com/login/", ig: "https://www.instagram.com/", li: "https://www.linkedin.com/" }
    },
    {
        name: "Ava Thompson",
        role: "Detailing Expert",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
        delay: "0.7s",
        socials: { fb: "https://www.facebook.com/login/", ig: "https://www.instagram.com/", li: "https://www.linkedin.com/" }
    },
];


const blogs = [
    {
        title: "Our strength, Your Business",
        date: "October 30, 2022",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1000",
        description: "Explore expert articles, guides, and resources to help you maintain your vehicle's peak condition.",
        category: "Announcements",
        delay: "0.3s"
    },
    {
        title: "How to Choose the Right Wax",
        date: "October 25, 2022",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=1000",
        description: "A comprehensive guide to selecting the best wax for your car's specific paint type and finish.",
        category: "Advices",
        delay: "0.5s"
    },
    {
        title: "Ceramic Coating: The Future",
        date: "October 15, 2022",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000",
        description: "Why ceramic coating is becoming the standard for long-term vehicle protection and shine.",
        category: "News",
        delay: "0.7s"
    },
    {
        title: "The Art of Interior Detailing",
        date: "October 10, 2022",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1000",
        description: "Step-by-step techniques for a showroom-quality interior that smells and looks brand new.",
        category: "Consultation",
        delay: "0.9s"
    },
    {
        title: "Engine Bay Deep Cleaning",
        date: "October 05, 2022",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=80&w=1000",
        description: "Protect your engine's longevity with professional deep cleaning services that remove grime and grease.",
        category: "Advices",
        delay: "1.1s"
    },
    {
        title: "Paint Correction Explained",
        date: "October 01, 2022",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1507136566006-bb91e5d1ad29?auto=format&fit=crop&q=80&w=1000",
        description: "Transform your car's appearance by removing scratches and swirls with our advanced paint correction.",
        category: "Development",
        delay: "1.3s"
    },
    {
        title: "Winter Car Care Tips",
        date: "September 25, 2022",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1000",
        description: "Prepare your vehicle for harsh winter conditions with these essential maintenance and protection tips.",
        category: "Advices",
        delay: "1.5s"
    },
    {
        title: "Eco-Friendly Detailing",
        date: "September 20, 2022",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=1000",
        description: "Our commitment to sustainability: how we use water-efficient methods and biodegradable products.",
        category: "Announcements",
        delay: "1.7s"
    },
    {
        title: "Luxury Car Restoration",
        date: "September 15, 2022",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1000",
        description: "Exclusive detailing techniques for high-end luxury vehicles to maintain their prestige and value.",
        category: "Consultation",
        delay: "1.9s"
    }
];




const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB for seeding...');

        await Service.deleteMany({});
        await Service.insertMany(services);
        console.log('Services seeded!');

        await Pricing.deleteMany({});
        await Pricing.insertMany(plans);
        console.log('Pricing seeded!');

        await Testimonial.deleteMany({});
        await Testimonial.insertMany(testimonials);
        console.log('Testimonials seeded!');

        await FAQ.deleteMany({});
        await FAQ.insertMany(faqData);
        console.log('FAQs seeded!');

        await Team.deleteMany({});
        await Team.insertMany(teamMembers);
        console.log('Team seeded!');

        await Blog.deleteMany({});
        await Blog.insertMany(blogs);
        console.log('Blogs seeded!');


        mongoose.connection.close();
        console.log('Seeding completed and connection closed.');
    } catch (error) {
        console.error('Seeding error:', error);
    }
};

seedDB();
