const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
	res.send('Hei, Marius! Hva skjer?');
})
module.exports = router;
