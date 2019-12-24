const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

const keys = require('./config/keys');
const app = express();

mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB connected.'))
.catch(error => console.log(error));

app.use(passport.initialize());
app.use(require('morgan')('dev'));
app.use('/uploads', express.static('./_uploads'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')());

app.use('/api/auth', authRoutes);

module.exports = app;
