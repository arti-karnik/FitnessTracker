var path = require("path");
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/views/index.html"));
});
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/views/exercise.html"));
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/views/stats.html"));
});

module.exports = router;