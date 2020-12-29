require('dotenv').config();

const express = require('express');
const cors = require('cors');
const sanitizer = require('./app/middlewares/body-sanitizer');

const app = express();

const router = require('./app/router');

const port = process.env.PORT || 3000;

app.use(cors('*'));


app.use(express.urlencoded({extended: true}));

app.use(sanitizer);

app.use(router);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});