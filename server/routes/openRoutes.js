const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World2!');
});


// router.post()

module.exports = router;