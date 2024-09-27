const express = require("express");
const movieRoutes = require("./routes/movieRoutes");

const app = express();

app.use("/movies",movieRoutes);

app.listen(8080, () => {
    console.log("App is listening at port 8080");
});

//movies