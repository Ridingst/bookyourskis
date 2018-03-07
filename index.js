const express = require('express')
var path = require('path');

const app = express()
app.use(express.static('public'))

app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.use('/images', express.static(path.join(__dirname, '/images')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/index.html')));
app.get('/memsey', (req, res) => res.send({"hey man"}));

var port = 3300;

app.listen(port, () => console.log('Example app listening on port ' + port));