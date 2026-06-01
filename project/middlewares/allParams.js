//Middleware to log all parameter names

const express = require('express');
const app = express();

const logParamNames = (req, res, next) => {
    console.log("🔍 Params keys:", Object.keys(req.params));
    console.log("🔍 Query keys:", Object.keys(req.query));

    next();
};

app.use(logParamNames);