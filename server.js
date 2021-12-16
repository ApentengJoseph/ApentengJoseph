const express = require('express');
const path = require('path');

const app = express(); 

//serve only the static files from the dist directory

app.use(express.static('./dist/portfolio'));

app.get('/*', (req, res) =>
    res.sendFile('index.html',{root: 'dist/$Portfolio/'})
);

//Start the app listening on the default heroku port
app.listen(process.env.PORT || 8080)