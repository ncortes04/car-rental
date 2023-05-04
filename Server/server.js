const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const carRoutes = require('./routes/carRoutes')
const homeRoutes = require('./controllers');
const userRoutes = require('./routes/userRoutes')

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

const sess = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 86400000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(carRoutes);
app.use("/users", userRoutes)

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});