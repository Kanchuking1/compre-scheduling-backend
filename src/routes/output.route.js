const express = require('express')
const outputController = require('../controllers/output.controller')

const router = express.Router()

router.get('/two/:schedId', outputController.getOutput2);

module.exports = router;