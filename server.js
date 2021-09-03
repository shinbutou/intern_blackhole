const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('hello world');
    res.sendStatus(500);
    res.send('response');
});

app.listen(8000);