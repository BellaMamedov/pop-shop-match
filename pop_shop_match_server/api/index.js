const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/user");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const imadeDownloader = require('image-downloader');
require("dotenv").config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'fasetsdvfdb234rfvgdvsfv';

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:3000",
  })
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json("success");
  } catch (e) {
    res.status(422).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {

    const passwordOk = bcrypt.compareSync(password, userDoc.password);
    if (passwordOk) {
      jwt.sign({email: userDoc.email, id:userDoc._id}, jwtSecret,  {}, (err,token)=> {
if(err) throw err;
      res.cookie('token', token).json("password is ok");
    });
    } else {
      res.status(422).json("password not ok");
    }
  } else {
    res.json("not found");
  }
});



app.post('/upload-by-link', async (req,res)=> {
  const {link} = req.body;
  const newName = Date.now() + '.jpg';
  await imadeDownloader.image({
    url:link,
    dest: __dirname + '/uploads' + newName 
  });
  res.json(__dirname + '/uploads' + newName);
})

app.listen(4000);