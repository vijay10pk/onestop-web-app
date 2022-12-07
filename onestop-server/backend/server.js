const express = require('express')
const cors = require("cors");
const colors = require('colors')
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes')
const serviceRoutes = require('./routes/serviceRoutes')
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', userRoutes);
app.use('/', serviceRoutes);

const appPort = 5000

app.listen(appPort);
console.log("Service Started at port:", appPort);


module.exports = app