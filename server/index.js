const express = require('express')
const app = express()
const PORT = 3000;
const path = require('path');
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/cars', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/rents.html'));
});

app.listen(PORT, ()=> {
    console.log(`APP RUNNING  on http://localhost:${PORT}`)
})
