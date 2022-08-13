const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get('/',(req, res) => {
  res.send("APP IS RUNNING 🔥🔥")
} )

mongoose
  .connect("mongodb+srv://prabh2508:prabh2508@cluster0.skvjeds.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(console.error);

// Models
const Pick = require("./models/pick");

app.get("/picks", async (req, res) => {
  const picks = await Pick.find();

  res.json(picks);
});



app.post("/pick/new", (req, res) => {
  const pick = new Pick({
    text: req.body.text,
  });

  pick.save();

  res.json(pick);
});


app.delete('/pick/delete/:id', async (req, res) => {
	const result = await Pick.findByIdAndDelete(req.params.id);

	res.json({result});
});

app.listen(process.env.PORT || 3001, () => console.log("Server start on port 3001"));
