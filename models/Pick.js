const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PickSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

const Pick = mongoose.model("Pick", PickSchema);

module.exports = Pick;
