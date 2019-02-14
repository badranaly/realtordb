const router = require('express').Router()
const realtordbController = require('../controllers/realtordb-controller')

router.post('/', realtordbController.create);
router.get('/', realtordbController.getUsers);

module.exports = router;

