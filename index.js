const express = require('express')
var path = require('path');

const app = express()
app.use(express.static('public'))

app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.use('/images', express.static(path.join(__dirname, '/images')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/index.html')));

app.listen(3300, () => console.log('Example app listening on port 3000!'))