const express = require("express");
const app = express()
const cors = require("cors")
const postModel = require("./postmodal");
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: false }))
app.use(cors())
require("dotenv").config()

const port = process.env.PORT || 5000;


//1hva8Dxh3GUj4YOD
const mongoose = require("mongoose");
const url = process.env.MONGO_DB;


mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const connection = mongoose.connection
connection.once("connected", () => {
  console.log("Mongo db Successfully Connected");
})

app.get("/newposts", async (req, res) => {
  await postModel.find({}).then((userData) => {
    console.log(userData)
    res.status(200).send(userData)
  })
});

app.post("/posts", async (req, res) => {
  try {
    console.log("req.body: ", req.body);

    const Newpost = new postModel({
      author: req.body.author,
      location: req.body.location,
      desc: req.body.desc,
      image: req.body.image
    });
    await postModel.create(Newpost);
    res.send("New post Added");

  } catch (err) {
    console.log("error: ", err);
  }
})


// if (process.env.NODE_ENV === "production") {
//   app.use(express.static('instaclone/build'));
//   const path = require("path");
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'instaclone', 'build', 'index.html'));
//   })
// }
app.get("/", (req, res) => {
  res.send("Backend Works");
})

app.listen(port, () => {
  console.log(`server is running at ${port}`)
})