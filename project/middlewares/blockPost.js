const express = require('express');
const app = express();


const blockPOST = (req, res, next) => {
    if (req.method === 'POST') {
        return res.status(403).json({ message: 'POST requests are blocked!' });
    }
    next(); 
};


app.use(blockPOST);


app.get('/', (req, res) => res.send('GET request allowed'));
app.post('/test', (req, res) => res.send('This will never be reached!'));

app.listen(3000, () => console.log('Server running on port 3000'));
