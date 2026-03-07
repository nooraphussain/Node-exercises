app.use((err, req, res, next) => {
    console.err(err.stack);
    res.status(500 || err.status).json({message: 'Server error'})
})