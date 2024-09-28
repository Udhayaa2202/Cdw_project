const { getAllMovies } = require("../services/movieServices");

const getAllMoviesController = (req,res) => {
    console.log("inside controller");
    const response = getAllMovies();
    res.send(response);
};

module.exports = { getAllMoviesController};