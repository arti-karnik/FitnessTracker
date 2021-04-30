const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/dbworkout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err.message));
/*
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbworkout", {
  useNewUrlParser: true,
  useFindAndModify: false
});*/


require("./routes/htmlroutes")(app);
require("./routes/apiroutes")(app);

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

/*app.listen((process.env.PORT || 5000), function(){
  console.log('listening on 5000');
});
*/
/*app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});*/