const app = express();

app.get('/products/:id', (req, res) => {
    const {id} = req.params;
    const {color, size} = req.query;

    res.send(`Product ID: ${id}, Color: ${color}, Size: ${size}`)
});