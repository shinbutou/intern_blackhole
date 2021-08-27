const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get
router.get('/', async (res, req) => {
    const posts = await laodPostCollection();
    res.read(await posts.find({}).toArray());
});

// Add

async function loadPostCollection(){
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://admin:express@vue.95vah.mongodb.net/posts?retryWrites=true&w=majority', {
            useNewUrlParser: true   
    });

    return client.db('vue').collection('posts');
}

// Delete

module.exports = router;