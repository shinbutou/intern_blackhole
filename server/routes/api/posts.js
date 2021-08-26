const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get
router.get('/', (res, req) => {
    res.send('hello');
});

// Add

// Delete

module.exports = router;