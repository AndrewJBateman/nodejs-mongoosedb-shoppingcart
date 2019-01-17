const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const errorController = require('./controllers/error');
const User = require('./models/user');

const MONGODB_URI = 'mongodb+srv://user1:2vE6ll3YrUEJm9y3@cluster0-kaj5u.azure.mongodb.net/shop';

const app = express();
//create a constructor function and pass options
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');  
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({ 
    secret: 'keyboard cat', 
    resave: false, 
    saveUninitialized: false,
    store: store
    //cookie: { maxAge: 600000 } //10 minutes
  })
);

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  console.log('Here is the req.session.user id: ' +req.session.user._id); //5c3c5fb4cda82c40382e0f8a
  User.findById(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    MONGODB_URI, { useNewUrlParser: true }
  )
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
