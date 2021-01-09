const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/hello', function (req, res) {
    console.log("made a call----");
    return res.send('pong');
});

app.listen(process.env.PORT || 8080, ()=>{
    console.log("listening on port 8080");
});
