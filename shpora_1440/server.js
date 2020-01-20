const express = require('express');
const path = require('path');


const port = 6666;
const clientPath = path.join(__dirname, '/');



const app = express();

app.use(express.static(clientPath));

app.get('/*', (req,res) => {
    res.sendfile(path.join(clientPath, 'index.html'))
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});