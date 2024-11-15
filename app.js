const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

app.use(express.static(__dirname + '/public'));

//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//Routes
app.use("/", require("./routes/index"));
app.use("/test", require("./routes/test"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));