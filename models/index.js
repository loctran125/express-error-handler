const mongoose = require("mongoose");

mongoose
  .connect(`mongodb://localhost/${process.env.DATABASE_NAME}`)
  .then(() => console.log("Connection to mongodb success!"))
  .catch((err) => console.log(err));

const User = new mongoose.Schema({
  name: String,
  sex: Boolean,
});
const UserModel = mongoose.model("users", User);
module.exports = { User: UserModel };
