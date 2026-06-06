//build web service for comments
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let comments = [];

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Add a new comment
app.post('/comments', (req, res) => {
    const { author, text } = req.body;
    if (!author || !text) {
        return res.status(400).json({ error: 'Author and text are required' });
    }
    const newComment = { id: comments.length + 1, author, text };
    comments.push(newComment);
    res.status(201).json(newComment);
});

app.listen(port, () => {
    console.log(`Comment service is running at http://localhost:${port}`);
});