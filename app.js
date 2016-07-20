const express = require('express');
let app = express();

let port = 4200;

app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
});

app.get('/', function(req, res) {
    res.send('Hello world');
});

