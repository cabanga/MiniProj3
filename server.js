require('dotenv/config')
const env = process.env

var express = require("express")
const bodyParser = require('body-parser')

var app = express();
var port = process.env.port || env.APP_PORT

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var _expertsController = require('./src/app/expertsController')
app.get('/experts', _expertsController.index)
app.post('/experts', _expertsController.create)
app.get('/experts/:id', _expertsController.show)

var _sponsorsController = require('./src/app/sponsorsController')
app.get('/sponsors', _sponsorsController.index)
app.post('/sponsors', _sponsorsController.create)
app.get('/sponsors/:id', _sponsorsController.show)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});