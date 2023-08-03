require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('./models/user.schema.model');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const app = express();
require('./config/database');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());

require('./config/passport');

//home route
app.get('/', (req, res) => {
  res.send('home page');
});

//register post route
app.post('/register', async (req, res) => {
 try {
   const user = await User.findOne({ username: req.body.username });
   if (user) return res.status(400).send('User already exists');
  
  bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
    const newUser = new User({
      username: req.body.username,
      password: hash,
    });
    await newUser.save().then((user) => {
      res.status(201).send({
        success: true,
        message: 'User created successfully',
        user: {
          id: user._id,
          username: user.username,
        }
      })
    }) 
      .catch((error) => {
        res.send({
          success: false,
          message: 'Use is not created.',
          error: error,
        })
      });
  });
 } catch (error) {
   res.status(500).send(error.message);
  };
});

//login post route
app.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(401).send({
      success: false,
      message: ' User not found',
    });
  };

  if (!bcrypt.compareSync(req.body.password,user.password)) {
    return res.status(401).send({
      success: false,
      message: 'Invalid Password',
    });
  };

  const payload = {
    id: user._id,
    username: user.username,
  };
  // const privateKey= process.env.SECRET_KEY;
  const privateKey= 'thisissecretkey';
  const token = jwt.sign(payload, privateKey, { expiresIn : "2d" });

  return res.status(200).send({
    success: true,
    message: 'User logged in successfully',
    token : "Bearer " + token,
  })

});

//profile get route

// app.get('/profile', passport.authenticate('jwt', { session: false }),
//     function(req, res) {
//       return res.status(200).send({
//         success: true,
//         user : {
//           id: req.user.id,
//           username : req.user.username,
//         }
//         })
//     }
// );

app.get('/profile', passport.authenticate('jwt', { session: false }),
  function(req, res) {
    return res.status(200).send({
      success: true,
      user: {
        id: req.user.id,
        username: req.user.username,
      }
    });
  }
);


// route not found
app.use((req, res,next) => {
  res.send('route not found');
});

// server error
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});
































module.exports = app;

