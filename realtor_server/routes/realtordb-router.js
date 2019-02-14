const router = require('express').Router()
const realtordbController = require('../controllers/realtordb-controller')

router.post('/', realtordbController.create);

module.exports = router;
