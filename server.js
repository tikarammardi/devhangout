const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/user');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//db config
const db = require('./config/db').mongoURI;

//connect to mongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World');
});

//use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on port :${PORT}`);
});
