// server.js

const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const postRoute = require('./post.route');




mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/posts', postRoute);


app.listen(PORT, () => console.log(`\x1b[36m \n \nServer ip: http://localhost:${PORT}`));