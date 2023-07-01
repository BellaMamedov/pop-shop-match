const express = require("express");
// const cors = require("cors");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth.js");
const usersRoute = require("./routes/users.js");
const assetsRoute = require("./routes/assets.js");
// const bcrypt = require("bcrypt");
// const User = require("./models/user");
// const bodyParser = require("body-parser");
// const jwt = require('jsonwebtoken');
// const imadeDownloader = require('image-downloader');
require("dotenv").config();
const app = express();

// const bcryptSalt = bcrypt.genSaltSync(10);
// const jwtSecret = 'fasetsdvfdb234rfvgdvsfv';

// app.use(express.json());
// app.use(
//   cors({
//     credentials: true,
//     origin: "http://127.0.0.1:3000",
//   })
// );

const connect = async ()=> {
  try {
await mongoose.connect(process.env.MONGO_URL);
console.log("Connected to mongoDB")
} catch (error) {
  throw error;
}
};

mongoose.connection.on("disconnected",()=>{
  console.log("mongoDB disconnected") 
})
mongoose.connection.on("connected",()=>{
  console.log("mongoDB connected") 
});


app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/assets", assetsRoute);




// app.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const userDoc = await User.create({
//       name,
//       email,
//       password: bcrypt.hashSync(password, bcryptSalt),
//     });
//     res.json("success");
//   } catch (e) {
//     res.status(422).json(e);
//   }
// });

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   const userDoc = await User.findOne({ email });
//   if (userDoc) {

//     const passwordOk = bcrypt.compareSync(password, userDoc.password);
//     if (passwordOk) {
//       jwt.sign({email: userDoc.email, id:userDoc._id}, jwtSecret,  {}, (err,token)=> {
// if(err) throw err;
//       res.cookie('token', token).json("password is ok");
//     });
//     } else {
//       res.status(422).json("password not ok");
//     }
//   } else {
//     res.json("not found");
//   }
// });



// app.post('/upload-by-link', async (req,res)=> {
//   const {link} = req.body;
//   const newName = Date.now() + '.jpg';
//   await imadeDownloader.image({
//     url:link,
//     dest: __dirname + '/uploads' + newName 
//   });
//   res.json(__dirname + '/uploads' + newName);
// })

app.listen(4000, ()=> {
  connect();
  console.log("Connected to backend!")
});