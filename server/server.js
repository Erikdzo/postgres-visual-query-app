const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8080;
const mountRoutes = require('./routes');
const helmet = require('helmet');

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());


mountRoutes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));