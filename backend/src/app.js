const express = require('express');
const router = require('./router');
const cors = require('cors');

const app = express();  

app.use(cors({
    origin: '*'
}));

app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(express.json());
app.use(router);

module.exports = app;

