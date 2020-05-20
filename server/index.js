const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const PORT = 3210;
const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.json());

app.listen(PORT, () => console.log('Showcasing on port: ', PORT));
