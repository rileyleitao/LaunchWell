const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

//Get Posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

//add Posts
router.post('/', (req, res) => {
    res.send('Hello');
});

//delete posts
router.delete('/:id', (req, res) => {
    res.send('Hello');
});

async function loadPostsCollection(){

    const client = await mongodb.MongoClient.connect('mongodb+srv://rileyparada:N0idBUKPrsSy54Ov@cluster0.kgz6lck.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('revue').collection('posts');

}

module.exports = router;