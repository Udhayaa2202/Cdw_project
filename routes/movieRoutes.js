const express = require('express');
const { getAllMoviesController } = require('../controllers/movieController');

const router = express.Router();

router.get('/', () => {
    console.log("inside router");
    getAllMoviesController();
});

module.exports = router;