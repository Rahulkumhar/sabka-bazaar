const express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
const productRoutes = require("./server/routes/productRoutes");

app.use(express.json());

app.use("/", productRoutes);


app.listen(3000);
