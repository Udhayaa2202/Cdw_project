const { getAllMovies } = require("../services/movieServices");

const getAllMoviesController = () => {
    console.log("inside controller");
    getAllMovies();
};

module.exports = { getAllMoviesController};