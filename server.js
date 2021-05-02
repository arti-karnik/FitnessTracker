const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3010;
const app = express();
const routes = require('./routes');

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

  app.use(routes);

  app.listen(process.env.PORT || 3010, function(){
      console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

