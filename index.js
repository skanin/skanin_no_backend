const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const defaultRoutes = require('./routes/default.js');

app.use(express.json());
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

app.use('/', defaultRoutes);

app.listen(port, () => {
	console.log('Up and running!!');
});
