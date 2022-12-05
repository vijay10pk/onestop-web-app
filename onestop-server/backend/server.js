const path = require('path')
const express = require('express')
const cors = require("cors");
const colors = require('colors')
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes')
const serviceRoutes = require('./routes/serviceRoutes')
const app = express();
const appPort = 5000
const NODE_ENV = "production"

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', userRoutes);
app.use('/', serviceRoutes);

//serve frontend
if(NODE_ENV ==='production')
{
    app.use(express.static(path.join(__dirname,'../../onestop-client/onestop-web-app/build')));
    app.get('*',(req,res) => res.sendFile(path.resolve(__dirname,'../../','onestop-client','onestop-web-app','build','index.html')));
} else {
    app.get('/', (req, res) => res.send('Please set to production'))
}



app.listen(appPort);
console.log("Service Started at port:", appPort);
console.log(path.resolve(__dirname,'../../','onestop-client','onestop-web-app','build','index.html'))
