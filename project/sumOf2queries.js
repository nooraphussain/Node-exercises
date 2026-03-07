const express = require('express');
const app = express();

app.get('/sum', (req, res) =>{
    const {n1, n2} = req.query;

    const a = Number(n1);
    const b = Number(n2);

    const sum = a+b;

    res.json({n1:a, n2:b, sum});
})

app.listen(3000)