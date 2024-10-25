const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// In-memory storage for reviews
let reviews = [];

// GET endpoint to retrieve all reviews
app.get('/reviews', (req, res) => {
    res.json(reviews);
});

// POST endpoint to add a new review
app.post('/reviews', (req, res) => {
    const { name, review } = req.body;

    // Input validation
    if (!name || !review) {
        return res.status(400).json({ error: 'Name and review are required.' });
    }

    // Create a new review object
    const newReview = { id: reviews.length + 1, name, review };
    reviews.push(newReview);

    res.status(201).json(newReview);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
