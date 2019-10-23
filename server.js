const express = require('express');
const mongoose = require('mongoose');
const items = require('./routes/api/items.js');

//const bodyParser = require('express.body-parser');
const app = express();

//BodyParser middleware
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to mongo
mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB connected ...'))
  .catch(err => console.log(err));

// use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5005;

app.listen(port, () => console.log(`server started on port ${port}`));
