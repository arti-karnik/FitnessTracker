const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const path = require("path");
const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));



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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

/*app.listen((process.env.PORT || 5000), function(){
  console.log('listening on 5000');
});

/*app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});*/